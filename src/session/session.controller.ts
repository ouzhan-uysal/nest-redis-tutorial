import { Controller, Delete, Get, Param } from '@nestjs/common';
import { RedisService } from 'src/redis/redis.service';

@Controller('session')
export class SessionController {
  constructor(private readonly redisService: RedisService) { }

  @Get(':userId')
  async sessionStatus(@Param('userId') userId: string): Promise<string> {
    return await this.redisService.getValue(userId);
  }

  @Get('set/:userId/:value')
  async sessionStart(@Param('userId') userId: string, @Param('value') value: string): Promise<void> {
    await this.redisService.setValue(userId, value);
  }

  @Delete(':userId')
  async sessionEnd(@Param('userId') userId: string): Promise<void> {
    await this.redisService.deleteValue(userId);
  }
}
