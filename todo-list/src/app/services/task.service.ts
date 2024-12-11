import { Injectable } from '@angular/core';
import { Task } from '../task.model'; // Ruta correcta

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: Task[] = [];

  constructor() {
    this.loadTasks();
  }

  loadTasks() {
    const tasks = localStorage.getItem('tasks');
    if (tasks) {
      this.tasks = JSON.parse(tasks);
    } else {
      this.tasks = [];
    }
  }

  saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  addTask(task: Task) {
    this.tasks.push(task); // Agregar tarea
    this.saveTasks(); // Guardar en localStorage
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter(task => task.id !== id); // Eliminar tarea por id
    this.saveTasks(); // Guardar cambios
  }

  toggleTaskCompletion(id: number) {
    const task = this.tasks.find(t => t.id === id);
    if (task) {
      task.completed = !task.completed;
      this.saveTasks(); // Guardar cambios
    }
  }

  getTasks() {
    return [...this.tasks]; // Devolver copia de las tareas
  }
}
