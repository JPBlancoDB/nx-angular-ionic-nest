import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { TasksPartialState } from './tasks.reducer';
import { tasksQuery } from './tasks.selectors';
import { LoadTasksAction } from './tasks.actions';

@Injectable()
export class TasksFacade {
  loaded$ = this.store.pipe(select(tasksQuery.getLoaded));
  allTasks$ = this.store.pipe(select(tasksQuery.getAllTasks));

  constructor(private store: Store<TasksPartialState>) {}

  loadTasks() {
    this.store.dispatch(new LoadTasksAction());
  }
}
