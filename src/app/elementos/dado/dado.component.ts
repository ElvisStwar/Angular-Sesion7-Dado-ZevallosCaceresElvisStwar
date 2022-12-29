import { Component } from '@angular/core';

@Component({
  selector: 'app-dado',
  templateUrl: './dado.component.html',
  styleUrls: ['./dado.component.css']
})
export class DadoComponent {
  numero:number = 0;

  lanzar(){
    this.numero = Math.round(Math.random()*10)

    for(this.numero){

    }
    // if(this.numero<1 && this.numero>6){
    //   this.numero = Math.round(Math.random()*10)
    // }
  }
}
