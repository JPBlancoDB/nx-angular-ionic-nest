import { TasksService } from './tasks.service';
import { Test } from '@nestjs/testing';

describe('TasksService', () => {
  let tasksService: TasksService;
  const tasksRepository = {
    findAll: jest.fn()
  };

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        TasksService,
        {
          provide: 'TasksRepository',
          useValue: tasksRepository
        }
      ]
    }).compile();

    tasksService = module.get<TasksService>(TasksService);
  });

  it('should invoke tasksRepository when findAll is invoked', async () => {
    await tasksService.findAll();

    expect(tasksRepository.findAll).toHaveBeenCalledTimes(1);
  });
});
