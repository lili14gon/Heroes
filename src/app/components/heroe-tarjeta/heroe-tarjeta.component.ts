import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
//Input--->padre a hijo
//Output---->hijo a padre
@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {
 @Input() heroe:any={};
 @Input() indice:number;
 @Output() heroeSeleccionado: EventEmitter<number>;
  constructor( private router:Router) { 
    //este inicializacion del EventEmitte()
    this.heroeSeleccionado=new EventEmitter();
  }

  ngOnInit() {
  }
  //primer codigo sin comunicacion
  // verHeroe(idx:number){
  //   this.router.navigate(['/heroe',idx]);
  // }

  //--metodo padre hijo
  verHeroe(){
    this.router.navigate(['/heroe',this.indice]);
  }

  //--metodo hijo padre,en el padre heroes.component esta el metodo verHeroe(id:number)
  // verHeroe(){
  //     this.heroeSeleccionado.emit(this.indice);
  //   }
  

}
