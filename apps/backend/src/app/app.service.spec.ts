import { Test } from '@nestjs/testing';

import { AppService } from './app.service';
import { TaskStatus } from '@tasks/contracts';

describe('AppService', () => {
  let service: AppService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [AppService]
    }).compile();

    service = app.get<AppService>(AppService);
  });

  describe('getData', () => {
    it('should return task', () => {
      expect(service.getData()).toEqual({
        id: 1,
        description: 'desc',
        status: TaskStatus.New
      });
    });
  });
});
