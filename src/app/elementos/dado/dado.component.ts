import { Component } from '@angular/core';

@Component({
  selector: 'app-dado',
  templateUrl: './dado.component.html',
  styleUrls: ['./dado.component.css']
})
export class DadoComponent {
  numero:number = 1;
  memoria=[0];
  lanzar(){
    //--------------- Elige un numero random --------------------
    this.numero = Math.round(Math.random()*10);
    //--------------- Elige un numero random --------------------


    //------------Si el numero no esta entre 1 y 6, escoge otro --------------
    for(let i=0;this.numero>6||this.numero<1;i++){
    this.numero = Math.round(Math.random()*10);
    }
    //------------Si el numero no esta entre 1 y 6, escoge otro --------------


    //--------------- Guarda el numero en un array --------------------
    this.memoria.push(this.numero);
    //--------------- Guarda el numero en un array --------------------


    //---------Elige otro numero si se repiten una vez, comparando con el array------------
    for(let i =0;this.numero==this.memoria[this.memoria.length-2];i++){
      this.numero = 0
      for(let i=0;this.numero>6||this.numero<1;i++){
        this.numero = Math.round(Math.random()*10);
        }
      this.memoria.push(this.numero);
    }
    //---------Elige otro numero si se repiten una vez, comparando con el array------------


    //---------Borra los primeros elementos del array, haciendo qeu quede solo 1---------------
    for(let i = 0; this.memoria.length>1;i++){
      this.memoria.shift();
    }
    //---------Borra los primeros elementos del array, haciendo qeu quede solo 1---------------
    
    
  }
  
}
