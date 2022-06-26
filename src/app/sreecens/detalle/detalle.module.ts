import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallePageRoutingModule } from './detalle-routing.module';
import { Food } from 'src/app/models/food.model';
import { DetallePage } from './detalle.page';
import { SearchbarComponent } from 'src/app/componentes/buscador/searchbar.component';
import { SearchbarModule } from 'src/app/componentes/buscador/searchbar.module';
import { BadgeModule } from 'src/app/componentes/badge/bagde.module';
import { Button } from 'protractor';
import { ButtonModule } from 'src/app/componentes/button/button.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallePageRoutingModule,
    SearchbarModule,
    BadgeModule, 
    ButtonModule,
    
  ],
  declarations: [DetallePage]
})
export class DetallePageModule {}
