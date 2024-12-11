import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home/home.page'; // Asegúrate de que HomePage esté bien importado

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)  // Ruta a HomePage
  },
  {
    path: 'add-task',
    loadChildren: () => import('./add-task/add-task.module').then(m => m.AddTaskPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
