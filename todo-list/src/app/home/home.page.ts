import { Component } from '@angular/core';
import { TaskService } from '../services/task.service'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  tasks: any[] = []; 

  constructor(private taskService: TaskService) {}

  
  ionViewWillEnter() {
    this.loadTasks();  
  }

  loadTasks() {
    this.tasks = this.taskService.getTasks();
  }

  toggleTaskCompletion(task: any) {
    this.taskService.toggleTaskCompletion(task.id);  
    this.loadTasks();  
  }

  
  deleteTask(id: number) {
    this.taskService.deleteTask(id);  
    this.loadTasks();  
  }
}
