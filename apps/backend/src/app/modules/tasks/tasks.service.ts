import { Injectable, Inject } from '@nestjs/common';
import { Task, TaskStatus } from '@tasks/contracts';
import { TaskEntity } from '../database';

@Injectable()
export class TasksService {
  constructor(
    @Inject('TasksRepository')
    private readonly TasksRepository: typeof TaskEntity
  ) {}

  async findAll(): Promise<Task[]> {
    return (await this.TasksRepository.findAll<TaskEntity>()) as Task[];
  }

  async create(): Promise<TaskEntity> {
    const task = {
      description: 'First description',
      status: TaskStatus.New
    };

    return await this.TasksRepository.create<TaskEntity>(task);
  }
}
