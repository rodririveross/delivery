import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children:[
  {

   path:'menu',
      loadChildren: () => import('../sreecens/menu/menu.module').then( m =>m.MenuPageModule)
 
  },
  {
    path:'promos',
    loadChildren: () => import('../sreecens/promos/promos.module').then( m => m.PromosPageModule)
  },
  {
    path:'favorites',
    loadChildren: () => import('../sreecens/favorites/favorites.module').then( m => m.FavoritesPageModule)
  },
  {
    path:'cart',
    loadChildren: () => import('../sreecens/cart/cart.module').then( m => m.CartPageModule)
  },
  {
    path:'mapa',
    loadChildren: () => import('../sreecens/mapa/mapa.module').then( m => m.MapaPageModule)
  },
  {
    path:'',
    redirectTo:'menu',
    pathMatch:'full',
  },
 
],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
