import { Component, OnInit } from '@angular/core';
import { Libro } from '../models/libro.model';
import { LibrosService } from '../libros.service';
import { IonItemSliding } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.page.html',
  styleUrls: ['./libros.page.scss'],
})
export class LibrosPage implements OnInit {

  public librosCargados: Libro[];

  constructor(private libroService:LibrosService, private router:Router) { }

  ngOnInit() {
    this.libroService.libros.subscribe(libros => {
      this.librosCargados = libros;
    })
  }

  onEditLibro(isbn:string, slidingItem:IonItemSliding){
    this.router.navigate(['/', 'libros', 'editar', isbn]);
    slidingItem.close();
  }

  nuevoLibro(){
    this.router.navigate(['/', 'libros', 'nuevo']);
  }

  onDeleteLibro(libroBorrar:Libro, slidingItem:IonItemSliding){
    this.libroService.deleteLibro(libroBorrar);
    slidingItem.close();
    this.ngOnInit();
  }

}
