import { TasksAction, TasksActionTypes } from './tasks.actions';
import { Task } from '@tasks/contracts';

export const TASKS_FEATURE_KEY = 'tasks';

export interface TasksState {
  list: Task[];
  loaded: boolean;
  error?: any;
}

export interface TasksPartialState {
  readonly [TASKS_FEATURE_KEY]: TasksState;
}

export const initialState: TasksState = {
  list: [],
  loaded: false
};

export function tasksReducer(
  state: TasksState = initialState,
  action: TasksAction
): TasksState {
  switch (action.type) {
    case TasksActionTypes.LoadTasksSucceeded: {
      state = {
        ...state,
        list: action.payload,
        loaded: true
      };
      break;
    }
  }
  return state;
}
