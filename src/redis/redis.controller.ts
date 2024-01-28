import { Controller, Get, Param } from '@nestjs/common';
import { RedisService } from './redis.service';

@Controller('redis')
export class RedisController {
  constructor(private readonly redisService: RedisService) { }

  @Get(':key')
  async getValue(@Param('key') key: string): Promise<string> {
    const value = await this.redisService.getValue(key);
    return value || 'Not found';
  }

  @Get('set/:key/:value')
  async setValue(@Param('key') key: string, @Param('value') value: string): Promise<void> {
    await this.redisService.setValue(key, value);
  }
}
