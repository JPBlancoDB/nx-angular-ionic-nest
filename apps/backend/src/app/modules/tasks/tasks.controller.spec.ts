import { Test, TestingModule } from '@nestjs/testing';

import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { TaskStatus } from '@tasks/contracts';

describe('TasksController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [TasksController],
      providers: [TasksService]
    }).compile();
  });

  describe('getData', () => {
    it('should return task', () => {
      const tasksController = app.get<TasksController>(TasksController);
      expect(tasksController.get()).toEqual({
        id: 1,
        description: 'desc',
        status: TaskStatus.New
      });
    });
  });
});
