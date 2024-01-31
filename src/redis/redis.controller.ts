import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { RedisService } from './redis.service';

@Controller('redis')
export class RedisController {
  constructor(private readonly redisService: RedisService) {}

  @Get(':key')
  async getValue(@Param('key') key: string): Promise<string> {
    const value = await this.redisService.getValue(key);
    return value || 'Not found';
  }

  @Post('set/:key')
  async setValue(
    @Param('key') key: string,
    @Body('data') data: string,
  ): Promise<void> {
    await this.redisService.setValue(key, JSON.stringify(data));
  }

  @Delete(':key')
  async deleteValue(@Param('key') key: string): Promise<void> {
    await this.redisService.deleteValue(key);
  }
}
