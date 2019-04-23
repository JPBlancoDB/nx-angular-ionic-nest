import { Test, TestingModule } from '@nestjs/testing';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskStatus } from '@tasks/contracts';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService]
    }).compile();
  });

  describe('getData', () => {
    it('should return task', () => {
      const appController = app.get<AppController>(AppController);
      expect(appController.getData()).toEqual({
        id: 1,
        description: 'desc',
        status: TaskStatus.New
      });
    });
  });
});
