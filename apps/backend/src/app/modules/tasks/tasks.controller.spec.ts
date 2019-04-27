import { TasksController } from './tasks.controller';
import { Test } from '@nestjs/testing';
import { TasksService } from './tasks.service';

describe('TasksController', () => {
  let controller: TasksController;
  let service: TasksService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      controllers: [TasksController],
      providers: [
        {
          provide: TasksService,
          useValue: {
            findAll: jest.fn()
          }
        }
      ]
    }).compile();

    service = module.get<TasksService>(TasksService);
    controller = module.get<TasksController>(TasksController);
  });

  it('should invoke tasks service once when get is called', async () => {
    await controller.get();

    expect(service.findAll).toHaveBeenCalledTimes(1);
  });
});
