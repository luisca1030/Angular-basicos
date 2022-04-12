import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})

export class ListadoComponent {

  heroes : string[] = ['spiderMan', 'Ironman', 'Thor', 'Hulk', 'capitan America'];
  //eroeBorrado : string|undefined = '...';
  heroeBorrado : string= '';
  borrarHeroe() {
     console.log('borrando');

   const heroedelete =  this.heroes.shift()|| '';

   this.heroeBorrado = heroedelete;
  }

}


