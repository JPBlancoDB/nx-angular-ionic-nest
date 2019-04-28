import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { readFirst } from '@nrwl/nx/testing';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';

import { NxModule } from '@nrwl/nx';

import { TasksEffects } from './tasks.effects';
import { TasksFacade } from './tasks.facade';

import { LoadTasksSucceededAction } from './tasks.actions';
import { TasksState, initialState, tasksReducer } from './tasks.reducer';
import { Task, TaskStatus } from '@tasks/contracts';
import { TasksService } from '../tasks.service';
import { of } from 'rxjs';

interface TestSchema {
  tasks: TasksState;
}

describe('TasksFacade', () => {
  let facade: TasksFacade;
  let store: Store<TestSchema>;
  let createTask: (id: number) => Task;

  beforeEach(() => {
    createTask = (id: number): Task => ({
      id,
      description: `desc`,
      status: TaskStatus.New
    });
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature('tasks', tasksReducer, { initialState }),
          EffectsModule.forFeature([TasksEffects])
        ],
        providers: [
          TasksFacade,
          {
            provide: TasksService,
            useValue: {
              getTasks: jest.fn().mockImplementation(() => of([]))
            }
          }
        ]
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          NxModule.forRoot(),
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule
        ]
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.get(Store);
      facade = TestBed.get(TasksFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async done => {
      try {
        let list = await readFirst(facade.allTasks$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.loadTasks();

        list = await readFirst(facade.allTasks$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });

    /**
     * Use `TasksLoaded` to manually submit list for state management
     */
    it('allTasks$ should return the loaded list; and loaded flag == true', async done => {
      try {
        let list = await readFirst(facade.allTasks$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        store.dispatch(
          new LoadTasksSucceededAction([createTask(1), createTask(2)])
        );

        list = await readFirst(facade.allTasks$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(2);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
