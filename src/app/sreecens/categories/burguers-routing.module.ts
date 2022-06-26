import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BurguersPage } from './burguers.page';

const routes: Routes = [
  {
    path: '',
    component: BurguersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BurguersPageRoutingModule {}
