import { TaskStatus } from './task-status.enum';

export interface Task {
  id: number;
  description: string;
  status: TaskStatus;
}
