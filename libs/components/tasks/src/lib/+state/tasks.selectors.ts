import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TASKS_FEATURE_KEY, TasksState } from './tasks.reducer';

const getTasksState = createFeatureSelector<TasksState>(TASKS_FEATURE_KEY);

const getLoaded = createSelector(
  getTasksState,
  (state: TasksState) => state.loaded
);
const getError = createSelector(
  getTasksState,
  (state: TasksState) => state.error
);

const getAllTasks = createSelector(
  getTasksState,
  getLoaded,
  (state: TasksState, isLoaded) => {
    return isLoaded ? state.list : [];
  }
);

export const tasksQuery = {
  getLoaded,
  getError,
  getAllTasks
};
