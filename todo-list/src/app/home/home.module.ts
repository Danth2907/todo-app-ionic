import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';  // Asegúrate de que esta ruta sea correcta

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    HomePageRoutingModule  // Asegúrate de que esté bien configurado
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
