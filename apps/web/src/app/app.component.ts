import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '@tasks/contracts';

@Component({
  selector: 'tasks-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasks$ = this.http.get<Task>('/api/tasks');
  constructor(private http: HttpClient) {}
}
