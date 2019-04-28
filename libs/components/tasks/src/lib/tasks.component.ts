import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { TasksFacade } from './+state/tasks.facade';
import { Observable } from 'rxjs';
import { Task } from '@tasks/contracts';

@Component({
  selector: 'tasks-component',
  templateUrl: 'tasks.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TasksComponent implements OnInit {
  tasks$: Observable<Task[]>;
  constructor(private readonly tasksFacade: TasksFacade) {}

  ngOnInit() {
    this.tasksFacade.loadTasks();
    this.tasks$ = this.tasksFacade.allTasks$;
  }
}
