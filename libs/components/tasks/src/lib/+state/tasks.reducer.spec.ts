import { LoadTasksSucceededAction } from './tasks.actions';
import { TasksState, initialState, tasksReducer } from './tasks.reducer';
import { Task, TaskStatus } from '@tasks/contracts';

describe('Tasks Reducer', () => {
  let createTask: (id: number) => Task;

  beforeEach(() => {
    createTask = (id: number): Task => ({
      id,
      description: `desc`,
      status: TaskStatus.New
    });
  });

  it('should return set the list of known Tasks', () => {
    const tasks = [createTask(1), createTask(2)];
    const action = new LoadTasksSucceededAction(tasks);
    const result: TasksState = tasksReducer(initialState, action);

    expect(result.loaded).toBe(true);
    expect(result.list.length).toBe(2);
    expect(result.list[1].id).toBe(2);
  });

  it('should return the initial state', () => {
    const action = {} as any;
    const result = tasksReducer(initialState, action);

    expect(result).toBe(initialState);
  });
});
