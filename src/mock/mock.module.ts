import { Module } from '@nestjs/common';
import { MockService } from './mock.service';
import { MockController } from './mock.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Mock, MockSchema } from './mock.schema';
import { RedisModule } from 'src/redis/redis.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Mock.name, schema: MockSchema }]),
    RedisModule,
  ],
  providers: [MockService],
  controllers: [MockController],
})
export class MockModule {}
