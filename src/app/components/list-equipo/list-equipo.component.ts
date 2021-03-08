import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-equipo',
  templateUrl: './list-equipo.component.html',
  styleUrls: ['./list-equipo.component.css']
})
export class ListEquipoComponent implements OnInit {

  @Input() equipoABorrar: string;

  list: any = ["River", "Boca", "Peñarol", "Danubio"];

  selectedTeam : string = "hola";

  constructor() { }

  ngOnInit() {

  }

  borrarEquipo(termino: string){
  
    console.log("borrarEquipo() -> Accedio")
    //for (let index = 0; index < this.list.length; index++) {
//
    //  const element = this.list[index];
    //  if(element === event.target.value){
    //    this.list.splice(index, 1);
    //  }
    //}

  }


}
