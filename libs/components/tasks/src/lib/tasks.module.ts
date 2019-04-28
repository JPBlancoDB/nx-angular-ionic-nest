import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './tasks.component';
import { createCustomElement } from '@angular/elements';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
  TASKS_FEATURE_KEY,
  initialState as tasksInitialState,
  tasksReducer
} from './+state/tasks.reducer';
import { TasksEffects } from './+state/tasks.effects';
import { TasksFacade } from './+state/tasks.facade';
import { TasksService } from './tasks.service';
import { environment } from '@env-backend/environment';
import { storeFreeze } from 'ngrx-store-freeze';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { RouterModule } from '@angular/router';
import { TasksState } from './+state/tasks.reducer';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot([]),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreModule.forFeature(TASKS_FEATURE_KEY, tasksReducer, {
      initialState: tasksInitialState
    }),
    EffectsModule.forFeature([TasksEffects])
  ],
  declarations: [TasksComponent],
  entryComponents: [TasksComponent],
  bootstrap: [],
  providers: [TasksFacade, TasksService, TasksEffects]
})
export class TasksModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const element = createCustomElement(TasksComponent, {
      injector: this.injector
    });
    customElements.define('components-tasks', element);
  }
}
