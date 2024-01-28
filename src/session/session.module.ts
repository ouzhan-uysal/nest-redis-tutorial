import { Module } from '@nestjs/common';
import { SessionController } from './session.controller';
import { RedisModule } from 'src/redis/redis.module';

@Module({
  imports: [RedisModule],
  controllers: [SessionController]
})
export class SessionModule { }
