import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
})
export class AwardsComponent implements OnInit {


  title: string
  active : number;
  list: any[];

  constructor() { }

  ngOnInit() {
    this.title = 'Power points';
    this.list = [
      {
        "title": "Mi Perfil",
        "url": "/perfil"
      },
      {
        "title": "Mis próximas clases",
        "url": "/proximas-clases"
      },
      {
        "title": "Mis historial",
        "url": "/historial"
      },
      {
        "title": "Power awards",
        "url": "/awards"
      }
    ]
  
  }

}
