import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '@tasks/contracts';
import { environment } from '@env-backend/environment';
import { Observable } from 'rxjs';

@Injectable()
export class TasksService {
  constructor(private httpClient: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.httpClient.get<Task[]>(`${environment.url}/tasks`);
  }
}
