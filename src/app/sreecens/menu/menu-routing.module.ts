import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { menupage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: menupage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuPageRoutingModule {}
