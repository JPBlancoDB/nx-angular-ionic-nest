import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import {
  LoadTasksSucceededAction,
  LoadTasksFailedAction,
  TasksActionTypes
} from './tasks.actions';
import { TasksService } from '../tasks.service';
import { of } from 'rxjs';

@Injectable()
export class TasksEffects {
  constructor(
    private readonly tasksService: TasksService,
    private readonly actions$: Actions
  ) {}

  @Effect()
  loadTasks$ = this.actions$.pipe(
    ofType(TasksActionTypes.LoadTasks),
    switchMap(() =>
      this.tasksService.getTasks().pipe(
        map(res => new LoadTasksSucceededAction(res)),
        catchError(error => of(new LoadTasksFailedAction(error)))
      )
    )
  );
}
