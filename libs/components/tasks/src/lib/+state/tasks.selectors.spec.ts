import { TasksPartialState } from './tasks.reducer';
import { tasksQuery } from './tasks.selectors';
import { Task, TaskStatus } from '@tasks/contracts';

describe('Tasks Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  let storeState: TasksPartialState;

  beforeEach(() => {
    const createTask = (id: number): Task => ({
      id,
      description: `desc`,
      status: TaskStatus.New
    });
    storeState = {
      tasks: {
        list: [createTask(1), createTask(2), createTask(3)],
        error: ERROR_MSG,
        loaded: true
      }
    };
  });

  describe('Tasks Selectors', () => {
    it('should return the list of Tasks when getAllTasks() is invoked', () => {
      const results = tasksQuery.getAllTasks(storeState);

      expect(results.length).toBe(3);
      expect(results[1].id).toBe(2);
    });

    it("should return the current 'loaded' status when getLoaded() is invoked", () => {
      const result = tasksQuery.getLoaded(storeState);

      expect(result).toBe(true);
    });

    it("should return the current 'error' storeState when getError() is invoked", () => {
      const result = tasksQuery.getError(storeState);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
