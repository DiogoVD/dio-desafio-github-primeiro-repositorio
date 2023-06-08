import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  produtos:string[] = []
  menuType:string = "admin"

  constructor() {
    this.produtos = [
      "mouse",
      "teclado",
      "cabo",
      "font"
    ]
  }

  adicionar(){
    this.produtos.push("Diogo");
  }

  deletar(){
    this.produtos.pop();
  }

  remover(index:number){
    this.produtos.splice(index,1);
  }

  ngOnInit(): void {
  }

}
