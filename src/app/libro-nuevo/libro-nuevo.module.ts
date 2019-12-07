import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LibroNuevoPageRoutingModule } from './libro-nuevo-routing.module';

import { LibroNuevoPage } from './libro-nuevo.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    LibroNuevoPageRoutingModule
  ],
  declarations: [LibroNuevoPage]
})
export class LibroNuevoPageModule {}
