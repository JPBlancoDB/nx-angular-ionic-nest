import { TestBed } from '@angular/core/testing';

import { Observable, of } from 'rxjs';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';

import { NxModule } from '@nrwl/nx';
import { hot } from '@nrwl/nx/testing';

import { TasksEffects } from './tasks.effects';
import { LoadTasksAction, LoadTasksSucceededAction } from './tasks.actions';
import { TasksService } from '../tasks.service';
import { Task, TaskStatus } from '@tasks/contracts';

describe('TasksEffects', () => {
  let actions: Observable<any>;
  let effects: TasksEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NxModule.forRoot(),
        StoreModule.forRoot({}),
        EffectsModule.forRoot([])
      ],
      providers: [
        TasksEffects,
        {
          provide: TasksService,
          useValue: {
            getTasks: jest.fn().mockImplementation(() => of([]))
          }
        },
        provideMockActions(() => actions)
      ]
    });

    effects = TestBed.get(TasksEffects);
  });

  describe('loadTasks$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: new LoadTasksAction() });
      expect(effects.loadTasks$).toBeObservable(
        hot('-a-|', { a: new LoadTasksSucceededAction([]) })
      );
    });
  });
});
