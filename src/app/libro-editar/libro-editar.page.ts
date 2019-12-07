import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LibrosService } from '../libros.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
import { Libro } from '../models/libro.model';

@Component({
  selector: 'app-libro-editar',
  templateUrl: './libro-editar.page.html',
  styleUrls: ['./libro-editar.page.scss'],
})
export class LibroEditarPage implements OnInit {

  form:FormGroup;
  public libroEditar : Libro;

  constructor(private libroservice:LibrosService, private router: Router, private route:ActivatedRoute, private navCtrl:NavController, private toastCtrl: ToastController) { }

  ngOnInit() {

    this.route.paramMap.subscribe(paramMap=>{
      if(!paramMap.get('isbn')){
        this.navCtrl.navigateBack('/libros');
        return;
      }
      this.libroservice.getLibro(paramMap.get('isbn')).subscribe(libro => {
        this.libroEditar = libro;
        this.form = new FormGroup({
          titulo: new FormControl(this.libroEditar.titulo, {
            updateOn: 'change',
            validators: [Validators.required, Validators.minLength(5)]
          }),
          resumen: new FormControl(this.libroEditar.resumen, {
            updateOn: 'change',
            validators: [Validators.required, Validators.minLength(10), Validators.maxLength(500)]
          }),
          cantidad: new FormControl(this.libroEditar.cantidad, {
            updateOn: 'change',
            validators: [Validators.required, Validators.min(1)]
          }),
        })
      })
    })
  }

  editarLibro(){
    this.libroservice.updateLibro(this.libroEditar.isbn, this.form.value.titulo, this.form.value.resumen, this.form.value.cantidad)
    .subscribe(() =>{
      this.toastCtrl.create({
        animated: true,
        duration: 4000,
        position: 'top',
        showCloseButton: true,
        message: 'El libro se ha editado',
      }).then(toastEl =>{
        toastEl.present();
        this.router.navigate(['/libros']);
      })
    });
  }

}
