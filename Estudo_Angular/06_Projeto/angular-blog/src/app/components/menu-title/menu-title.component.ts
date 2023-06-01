import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-title',
  templateUrl: './menu-title.component.html',
  styleUrls: ['./menu-title.component.css']
})
export class MenuTitleComponent implements OnInit {
  nameTitle:string = "Blog Diogro"
  constructor() { }

  ngOnInit(): void {
  }

}
