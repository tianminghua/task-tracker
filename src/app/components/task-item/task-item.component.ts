import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Tasks } from 'src/app/Tasks';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task: Tasks
  @Output() onDeleteTask: EventEmitter<Tasks> = new EventEmitter()
  @Output() onToggleReminder: EventEmitter<Tasks> = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  onDelete(task: Tasks) {
    this.onDeleteTask.emit(task)
  }

  onToggle(task: Tasks) {
    this.onToggleReminder.emit(task)
  }
}
