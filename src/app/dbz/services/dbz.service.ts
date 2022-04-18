import { Injectable } from "@angular/core";
import { Personaje } from "../Interfaces/dbz.interface";


@Injectable()
export class DbzService{

 private _personajes : Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre: 'Vegeta',
      poder: 10000
    }
];

get personajes():Personaje[] {
    return [...this._personajes];
}


  constructor(){
      console.log('servicio inicializado');
  }

  agregarPersonaje( argument : Personaje){

     this._personajes.push(argument);
  }
}
