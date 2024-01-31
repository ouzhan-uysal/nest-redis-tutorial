import { Body, Controller, Get, Post } from '@nestjs/common';
import { MockService } from './mock.service';
import { Mock } from './mock.schema';
import { ICreatedMockDto } from './mock.interface';
import { RedisService } from 'src/redis/redis.service';

@Controller('mock')
export class MockController {
  constructor(
    private readonly mockService: MockService,
    private readonly redisService: RedisService,
  ) {}

  @Get()
  async getAllMockData(): Promise<Array<Mock>> {
    console.time('redis');
    const redisData = await this.redisService.getValue('mock-data');
    if (redisData) {
      console.timeEnd('redis');
      return JSON.parse(redisData);
    }
    console.time('db');
    const data = await this.mockService.findAll();
    await this.redisService.setValue('mock-data', JSON.stringify(data));
    console.timeEnd('db');
    return data;
  }

  @Post()
  async createNewMockData(@Body() data: ICreatedMockDto): Promise<Mock> {
    await this.redisService.setValue('mock-data', JSON.stringify(data));
    return await this.mockService.create(data);
  }
}
