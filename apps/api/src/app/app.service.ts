import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from '@tasks/contracts';

@Injectable()
export class AppService {
  getData(): Task {
    return {
      id: 1,
      description: 'desc',
      status: TaskStatus.New
    };
  }
}
