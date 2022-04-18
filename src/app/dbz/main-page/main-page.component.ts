import { Component, OnInit } from '@angular/core';
import { Personaje } from '../Interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'

})

export class MainPageComponent {

  //se movio al servicio dbzpersonajes
  // personajes : Personaje[] = [
  //     {
  //       nombre: 'Goku',
  //       poder: 15000
  //     },
  //     {
  //       nombre: 'Vegeta',
  //       poder: 10000
  //     }
  // ];

 // personajes: Personaje[] = [];
//otra forma
//  get personajes(): Personaje[]{
//       return this.dbzService.personajes
//  }

//refactury

  nuevo: Personaje = {
    nombre: 'prueba ',
    poder: 123
  }


  //refactury
  // agregarNuevoPersonaje( argumento: Personaje) {

  //   //  this.personajes.push(argumento);
  // }


  constructor(){

  }

  //  constructor( private dbzService : DbzService){
  //  //     this.personajes = this.dbzService.personajes;
  //  //el get
  //  }

  // CambiarNombre( event : any ){
  //    console.log(event.target.value)
  // }

  // Agregar(event: any ){
  //   event.preventDefault();
  //   console.log('hey');
  // }


}
