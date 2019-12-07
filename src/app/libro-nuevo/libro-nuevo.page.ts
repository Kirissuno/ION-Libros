import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { LibrosService } from '../libros.service';

@Component({
  selector: 'app-libro-nuevo',
  templateUrl: './libro-nuevo.page.html',
  styleUrls: ['./libro-nuevo.page.scss'],
})
export class LibroNuevoPage implements OnInit {

  form:FormGroup;
  isbn:string;
  titulo:string;
  resumen:string;
  cantidad:number;
  portada:string;

  constructor(private libroservice:LibrosService, private router: Router, private formBuilder: FormBuilder, private toastCtrl: ToastController) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      isbn : ['', [Validators.required, Validators.minLength(5), Validators.maxLength(5)]],
      titulo: ['', [Validators.required, Validators.minLength(5)]],
      resumen: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(500)]],
      cantidad: ['', [Validators.required, Validators.min(1)]],
      portada: ['', [Validators.required, Validators.minLength(10), Validators.pattern('(https?:\/\/.*\.(?:png|jpg))')]]
    })
  }

  nuevoLibro(){
    this.libroservice.getLibro(this.isbn).subscribe(libro => {
      if(typeof(libro) !== 'undefined'){
        this.toastCtrl.create({
          animated: true,
          duration: 4000,
          position: 'top',
          showCloseButton: true,
          message: 'Ya hay un libro con ese ISBN',
        }).then(toastEl =>
          toastEl.present()
        )
      }else{
        this.libroservice.addLibro(this.isbn, this.titulo, this.resumen, this.cantidad, this.portada);
        this.toastCtrl.create({
          animated: true,
          duration: 4000,
          position: 'top',
          showCloseButton: true,
          message: 'El libro se ha añadido',
        }).then(toastEl =>{
          toastEl.present();
          this.router.navigate(['/libros']);
        })
      }}
      )}

}
