import { Component, OnInit } from '@angular/core';
import { LibrosService } from '../libros.service';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Libro } from '../models/libro.model';

@Component({
  selector: 'app-libro-detalles',
  templateUrl: './libro-detalles.page.html',
  styleUrls: ['./libro-detalles.page.scss'],
})
export class LibroDetallesPage implements OnInit {

  public libroCargado: Libro;

  constructor(private libroService:LibrosService, private route:ActivatedRoute, private navCtrl: NavController) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap =>{
      if(!paramMap.has('isbn')) {
        this.navCtrl.navigateBack('/libros');
        return;
      }

      this.libroService.getLibro(paramMap.get('isbn')).subscribe(libro => {
        this.libroCargado = libro;
      })
    })
  }

}
