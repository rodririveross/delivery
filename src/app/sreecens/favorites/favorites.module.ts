import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FavoritesPageRoutingModule } from './favorites-routing.module';
import { FavoritesPage } from './favorites.page';
import { CartItemModule } from 'src/app/componentes/cart-item/cart-item.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FavoritesPageRoutingModule,
    CartItemModule,


  ],
  declarations: [FavoritesPage]
})
export class FavoritesPageModule {}
