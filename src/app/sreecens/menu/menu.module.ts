import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { menupage } from './menu.page';
import { MenuPageRoutingModule } from './menu-routing.module';
import { SearchbarModule } from '../../componentes/buscador/searchbar.module';
import { CategoryComponent } from '../../componentes/categorias/category.component';
import { CategoryModule } from '../../componentes/categorias/category.module';
import { FoodCardModule } from '../../componentes/food-card/food-card.module';

import { LoginPageModule } from 'src/app/login/login.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuPageRoutingModule,
    SearchbarModule,
    CategoryModule,
    FoodCardModule,
    LoginPageModule
  
  ],
  declarations: [menupage]
})
export class MenuPageModule {}
