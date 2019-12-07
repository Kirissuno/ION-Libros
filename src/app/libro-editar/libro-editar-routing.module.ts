import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LibroEditarPage } from './libro-editar.page';

const routes: Routes = [
  {
    path: '',
    component: LibroEditarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LibroEditarPageRoutingModule {}
