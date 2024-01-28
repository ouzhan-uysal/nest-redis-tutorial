import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  healthcheck(): string {
    return 'Redis Tutorial API is working...';
  }
}
