import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './tasks.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  imports: [CommonModule, BrowserModule],
  declarations: [TasksComponent],
  entryComponents: [TasksComponent],
  bootstrap: []
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
