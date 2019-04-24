import { Test } from '@nestjs/testing';

import { TasksService } from './tasks.service';
import { TaskStatus } from '@tasks/contracts';

describe('TasksService', () => {
  let service: TasksService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [TasksService]
    }).compile();

    service = app.get<TasksService>(TasksService);
  });

  describe('getData', () => {
    it('should return task', () => {
      expect(service.findAll()).toEqual({
        id: 1,
        description: 'desc',
        status: TaskStatus.New
      });
    });
  });
});
