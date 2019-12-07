import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LibroEditarPageRoutingModule } from './libro-editar-routing.module';

import { LibroEditarPage } from './libro-editar.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    LibroEditarPageRoutingModule
  ],
  declarations: [LibroEditarPage]
})
export class LibroEditarPageModule {}
