import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m=> m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./registro/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then( m => m.AdminPageModule)
  },
  {
    path: 'detalle/:id',
    loadChildren: () => import('./sreecens/detalle/detalle.module').then( m => m.DetallePageModule)
  },
  {
    path:'promos',
    loadChildren: () => import('./sreecens/promos/promos.module').then( m => m.PromosPageModule)
  },
  {
    path:'favorites',
    loadChildren: () => import('./sreecens/favorites/favorites.module').then( m => m.FavoritesPageModule)
  },
  {
    path: 'burguers/id',
    loadChildren: () => import('./sreecens/categories/burguers.module').then( m => m.BurguersPageModule)
  },
  {
    path: 'menu/id',
    loadChildren: () => import('./sreecens/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'pago',
    loadChildren: () => import('./sreecens/pago/pago.module').then( m => m.PagoPageModule)
  },
  {
    path: 'mapa',
    loadChildren: () => import('./sreecens/mapa/mapa.module').then( m => m.MapaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
