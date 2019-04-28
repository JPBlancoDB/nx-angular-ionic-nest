import { Action } from '@ngrx/store';
import { Task } from '@tasks/contracts';

export enum TasksActionTypes {
  LoadTasks = '[Tasks] Load Tasks',
  LoadTasksSucceeded = '[Tasks] Load Tasks Succeeded',
  LoadTasksFailed = '[Tasks] Load Tasks Failed'
}

export class LoadTasksAction implements Action {
  readonly type = TasksActionTypes.LoadTasks;
}

export class LoadTasksFailedAction implements Action {
  readonly type = TasksActionTypes.LoadTasksFailed;
  constructor(public payload: any) {}
}

export class LoadTasksSucceededAction implements Action {
  readonly type = TasksActionTypes.LoadTasksSucceeded;
  constructor(public payload: Task[]) {}
}

export type TasksAction =
  | LoadTasksAction
  | LoadTasksSucceededAction
  | LoadTasksFailedAction;

export const fromTasksActions = {
  LoadTasksAction,
  LoadTasksSucceededAction,
  LoadTasksFailedAction
};
