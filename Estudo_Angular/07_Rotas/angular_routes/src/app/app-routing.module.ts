import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TitleComponent } from './pages/index/title/title.component';
import { CardComponent } from './pages/portifolio/card/card.component';


const routes: Routes = [
  {path:'', component: TitleComponent, pathMatch:'full'},   //juntamento com o path:'' e full é definido como rota padrao
  //{path:'portfolio', component: CardComponent, pathMatch:'prefix'},
  //{path:'portfolio/:id', component: CardComponent, pathMatch:'prefix'},

  //portfolio
  //portfolio/1
  //portfolio/1/diogo
  {path:'portfolio', component: CardComponent, children:[
    {path:':id', component: CardComponent},
    {path:':id/:tolken', component: CardComponent}
  ]},
  {path:'**', redirectTo:''}  //redireciona para outra pagina definida pelo redirectto.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
