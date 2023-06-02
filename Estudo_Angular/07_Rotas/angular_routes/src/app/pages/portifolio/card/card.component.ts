import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  //constructor() {}

  constructor(
    private parametrizador: ActivatedRoute,
    private navegador: Router //1 - redirecionamento de rota
    ) {

    //http://localhost:4200/portfolio/{5}
    this.parametrizador.params.subscribe(
      res => console.log(res)
    )
    this.parametrizador.firstChild?.params.subscribe(
      res => console.log(res)
    )
    //http://localhost:4200/portfolio/5?{name=diogo&token=123}
    this.parametrizador.queryParams.subscribe(
      res => console.log(res)
    )
  }

  ngOnInit(): void {
    //setInterval(()=>{ //1 - define o redirecionamento de rota apos 5 segundos levando para a pagina principal.
    //  this.navegador.navigate(['/'])
    //}, 5000)
  }

}
