import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-atributos',
  templateUrl: './comp-atributos.component.html',
  styleUrls: ['./comp-atributos.component.css']
})
export class CompAtributosComponent implements OnInit {
  estilo:string = "enable"
  corFundo:string = "blue"
  corDaFonte:string = "yellow"
  item:string = ""
  lista:string [] = []
  isEnableBlock = "true"
  constructor() { }

  adicionarLista(){
    this.lista.push(this.item)
    this.item = ""
  }

  trocar(){
    if(this.estilo === "enable"){
      this.estilo = "disable"
    }else{
      this.estilo = "enable"
    }
  }


  ngOnInit(): void {
  }

}
