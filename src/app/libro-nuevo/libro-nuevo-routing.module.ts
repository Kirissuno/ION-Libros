import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LibroNuevoPage } from './libro-nuevo.page';

const routes: Routes = [
  {
    path: '',
    component: LibroNuevoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LibroNuevoPageRoutingModule {}
