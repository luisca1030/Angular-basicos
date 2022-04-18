import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../Interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent  {

  @Input()
  nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  // @Input('data')
  // personajes: Personaje[] =[];

  //
  //@Output() onNewPersonaje: EventEmitter<Personaje> = new EventEmitter();

constructor(private dbzService: DbzService){

}


  Agregar() {
    if( this.nuevo.nombre.trim().length === 0){
      return;
    }

    // this.personajes.push(this.nuevo);
    // this.onNewPersonaje.emit(this.nuevo);

    this.dbzService.agregarPersonaje(this.nuevo);

    this.nuevo ={
        nombre : "",
        poder : 0
    }

    // console.log(this.personajes)

  }

}
