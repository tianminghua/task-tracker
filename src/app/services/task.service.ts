import { Injectable } from '@angular/core';
import { Tasks } from '../Tasks';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'https://dl-shop-app-api.herokuapp.com/api/task'

  constructor(private http: HttpClient) { }

  getTasks(nickname: string): Observable<Tasks[]> {
    const url = this.apiUrl + '/find/' + nickname
    return this.http.get<Tasks[]>(url)
  }

  deleteTask(task: Tasks): Observable<Tasks> {
    const url = this.apiUrl + '/find'
    return this.http.delete<Tasks>(url)
  }

  updateTaskReminder(nickname: string, newObject: any): Observable<Tasks> {
    const url = this.apiUrl + '/find/' + nickname
    return this.http.put<Tasks>(url, newObject)
  }

  addTask(task: Tasks): Observable<Tasks> {
    return this.http.post<Tasks>(this.apiUrl, task)
  }
}
