import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BurguersPageRoutingModule } from './burguers-routing.module';

import { BurguersPage } from './burguers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BurguersPageRoutingModule
  ],
  declarations: [BurguersPage]
})
export class BurguersPageModule {}
