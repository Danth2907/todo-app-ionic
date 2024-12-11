import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from '../services/task.service'; 

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.page.html',
  styleUrls: ['./add-task.page.scss'],
})
export class AddTaskPage {
  newTask = { title: '', description: '', type: 'trabajo', completed: false };

  constructor(private taskService: TaskService, private router: Router) {}


  saveTask() {
   
    const newTaskWithId = { ...this.newTask, id: new Date().getTime() };

    this.taskService.addTask(newTaskWithId); 
    this.router.navigate(['/']); 
  }
}
