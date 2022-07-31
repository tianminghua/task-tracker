import { Component, OnInit } from '@angular/core';
import { Tasks } from 'src/app/Tasks';
import { TaskService } from 'src/app/services/task.service';
import { AuthService } from '@auth0/auth0-angular';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '../../../environments/environment';
import { TASKS } from 'src/app/mock-tasks';

interface Message {
  message: string;
}

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Tasks[] = []
  message: string = "Please press the ADD button to add tasks";
  messageEmpty: string = "You have no tasks right now";
  user: any

  constructor(private taskService: TaskService, private http: HttpClient, public auth: AuthService) { }

  ngOnInit(): void {
    this.auth.user$.subscribe(profile => {
      this.user = profile
      if (this.user) {
        this.taskService.getTasks(this.user.nickname).subscribe((tasks) => this.tasks = tasks)
      } else {
        this.tasks = TASKS
      }

    })
  }

  deleteTask(task: Tasks) {
    this.tasks = this.tasks.filter(item => item.text !== task.text)
    if (this.user) {
      const newObject = {
        nickname: this.user.nickname,
        tasks: this.tasks
      }
      this.taskService.updateTaskReminder(this.user.nickname, newObject).subscribe()
    }

  }

  toggleReminder(task: Tasks) {
    task.reminder = !task.reminder
    if (this.user) {
      const newObject = {
        nickname: this.user.nickname,
        tasks: this.tasks
      }
      this.taskService.updateTaskReminder(this.user.nickname, newObject).subscribe()
    }
  }

  addTask(task: Tasks) {
    this.tasks.push(task)
    if (this.user) {
      const newObject = {
        nickname: this.user.nickname,
        tasks: this.tasks
      }
      this.taskService.updateTaskReminder(this.user.nickname, newObject).subscribe()
    }
  }

  // callApi(): void {
  //   this.http
  //     .get(`${env.dev.serverUrl}/api/messages/public-message`)
  //     .subscribe((result: Message) => {
  //       this.message = result.message;
  //     });
  // }

  // callSecureApi(): void {
  //   this.http
  //     .get(`${env.dev.serverUrl}/api/messages/protected-message`)
  //     .subscribe((result: Message) => {
  //       this.message = result.message;
  //     });
  // }

}
