import { Libro } from './models/libro.model';
import { map,take, tap, reduce } from "rxjs/operators";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {
  private librosList: Libro[] = [
    new Libro(
      '00001',
      'Harry Potter y la piedra filosofal',
      'En esta primera obra se introducen la mayoría de los personajes principales de la serie, así como muchos de los lugares donde se desarrollará la acción. Se narran los primeros pasos de Harry en el mundo de la magia, así como su primer enfrentamiento con Voldemort, quien en su búsqueda de la inmortalidad quiere obtener el poder de la piedra filosofal.',
      3,
      'https://images-eu.ssl-images-amazon.com/images/I/517DxWbJNZL.jpg'
    ),
    new Libro(
      '00002',
      'Harry Potter y la cámara secreta',
      'El libro relata el segundo año de Harry en Hogwarts. Un día un elfo llamado Dobby vino a casa de Harry para avisarle de que Hogwarts corría un grave peligro. Más tarde su amigo Ron, le recogerá en un coche volador y así empieza su curso en Hogwarts durante el cual aparecen mensajes en las paredes de los pasillos de la escuela que advierten que la Cámara de los Secretos ha sido abierta, seguidos de una serie de ataques a alumnos que no provienen de familias con sangre mágica.',
      5,
      'https://images-eu.ssl-images-amazon.com/images/I/51lTFpAu77L.jpg'
    ),
    new Libro(
      '00003',
      'Harry Potter y el prisionero de Azkaban',
      'En esta oportunidad se introducen la figura del dementor y los personajes de Remus Lupin y Sirius Black, quien al inicio de la novela escapa de la prisión de Azkaban, además de desarrollar la historia de los padres de Harry. Es el único libro de la serie en el que no aparece Voldemort.',
      6,
      'https://images-eu.ssl-images-amazon.com/images/I/51AX%2B4FGlHL.jpg'
    ),
    new Libro(
      '00004',
      'Harry Potter y el cáliz de fuego',
      'En esta ocasión, se narra el cuarto año de Harry en Hogwarts y el misterio que rodea el ingreso involuntario de su nombre en el Torneo de los tres magos, en el cual es obligado a competir junto a otros tres participantes. La historia explora más a fondo el mundo mágico y termina con el resurgimiento de Lord Voldemort. Previo a la publicación del libro, se generó mucha controversia y anticipación ante el anuncio de la autora de que un personaje moriría.',
      3,
      'https://images-eu.ssl-images-amazon.com/images/I/51Y6Exe5UiL.jpg'
    ),
    new Libro(
      '00005',
      'Harry Potter y la Orden del Fénix',
      'En el quinto libro, Harry Potter debe enfrentarse tanto a un Voldemort resurgido como al resto del mundo mágico que se niega a creer que esto es cierto, empezando por el Ministerio de Magia. Este nombra a Dolores Umbridge como la nueva directora de Hogwarts, y junto con Luna Lovegood y Bellatrix Lestrange son los tres personajes más destacados que se introducen en esta entrega. Por otro lado, se revela una importante profecía que concierne a Harry y a Voldemort.',
      1,
      'https://images-eu.ssl-images-amazon.com/images/I/51yxKf%2BNa4L.jpg'
    ),
    new Libro(
      '00006',
      'Harry Potter y el misterio del príncipe',
      'En esta sexta entrega, Harry se topa con un antiguo libro de texto de pociones lleno de anotaciones y recomendaciones firmadas por un misterioso príncipe. Al mismo tiempo, recibe clases particulares por el propio director del colegio, Albus Dumbledore, que le hace conocer momentos del pasado de Voldemort, para así enseñarle lo que son los horrocruxes, objetos elementales para lograr su victoria. ',
      4,
      'https://images-eu.ssl-images-amazon.com/images/I/51Z3jESecpL.jpg'
    ),
    new Libro(
      '00007',
      'Harry Potter y las reliquias de la Muerte',
      'Esta última novela narra los acontecimientos que siguen directamente a la muerte de Dumbledore, en los que Voldemort finaliza su ascenso al poder y logra dominar el Ministerio de Magia. Harry y sus amigos deciden no asistir a su último año en Hogwarts, para salir en la búsqueda de los horrocruxes restantes. Finalmente, se lleva a cabo la batalla de Hogwarts, entre la Orden del Fénix, alumnos y profesores del colegio, por un lado, y Voldemort y los Mortífagos, por el otro.',
      5,
      'https://kbimages1-a.akamaihd.net/b81fd9ce-0706-45a8-a019-c7c5ecf5c6d8/1200/1200/False/harry-potter-y-las-reliquias-de-la-muerte-1.jpg'
    ),
    new Libro(
      '00008',
      'Harry Potter y el legado maldito',
      'La octava entrega de la serie de Harry Potter (que está dividida en dos partes) se publicó el 31 de julio de 2016. No es una novela como las anteriores, sino sencillamente el guion utilizado en la obra de teatro sobre el mismo, la cual se estrenó el 30 de julio de 2016.',
      6,
      'https://imagessl4.casadellibro.com/a/l/t5/44/9788498387544.jpg'
    )
  ];

  private _libros = new BehaviorSubject<Libro[]>(this.librosList);

  constructor() {}

  get libros() {
    return this._libros.asObservable();
  }

  getLibro(isbn: string) {
    return this._libros.pipe(
      map(materials => {
        return materials.find(p => p.isbn === isbn);
      })
    );
  }

  deleteLibro(libroaborrar:Libro){
    for (let libro of this.librosList){
      if(libro.isbn === libroaborrar.isbn){
        this.librosList.splice(this.librosList.indexOf(libro),1);
        break;
      }
    }
  }

  addLibro(isbn:string, titulo:string, resumen:string, cantidad:number, portada:string){
    this.librosList.push(new Libro(
      isbn,
      titulo,
      resumen,
      cantidad,
      portada
    ))
  }

  updateLibro(
    libroisbn: string,
    titulo: string,
    descripcion: string,
    cantidad: number
  ) {
    let updateLibros: Libro[];
    return this.libros.pipe(
      take(1),
      tap(libros => {
        const updateLibroIndex = libros.findIndex(
          li => li.isbn === libroisbn
        );
        updateLibros = [...libros];
        const oldLibro = updateLibros[updateLibroIndex];
        updateLibros[updateLibroIndex] = new Libro(
          oldLibro.isbn,
          titulo,
          descripcion,
          cantidad,
          oldLibro.portada
        );
        this._libros.next(updateLibros);
      })
    );
  }
}
