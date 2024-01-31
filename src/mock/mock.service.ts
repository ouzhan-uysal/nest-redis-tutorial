import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Mock } from './mock.schema';
import { InjectModel } from '@nestjs/mongoose';
import { ICreatedMockDto } from './mock.interface';

@Injectable()
export class MockService {
  constructor(@InjectModel(Mock.name) private mockRepository: Model<Mock>) {}

  async create(createMockDto: ICreatedMockDto): Promise<Mock> {
    const createdMock = new this.mockRepository(createMockDto);
    return createdMock.save();
  }

  async findAll(): Promise<Array<Mock>> {
    return await this.mockRepository.find().exec();
  }
}
