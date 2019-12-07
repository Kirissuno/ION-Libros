import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "libros",
    children: [
      {
        path: "",
        loadChildren: () => import('./libros/libros.module').then( m => m.LibrosPageModule) 
      },
      {
        path: "detalles/:isbn",
        loadChildren: () => import('./libro-detalles/libro-detalles.module').then( m => m.LibroDetallesPageModule)
      },
      {
        path: "editar/:isbn",
        loadChildren: () => import('./libro-editar/libro-editar.module').then( m => m.LibroEditarPageModule)
      },
      {
        path: "nuevo",
        loadChildren: () => import('./libro-nuevo/libro-nuevo.module').then( m => m.LibroNuevoPageModule)
      }
    ]
  },
  {
    path: "",
    redirectTo: "/libros",
    pathMatch: "full"
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
