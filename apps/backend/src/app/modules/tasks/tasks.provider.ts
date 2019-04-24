import { TaskEntity } from '../database';

export const tasksProviders = {
  provide: 'TasksRepository',
  useValue: TaskEntity
};
