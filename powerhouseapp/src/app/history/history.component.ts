import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
})
export class HistoryComponent implements OnInit {

  title: string;
  list: any[];
  active : string;

  constructor() { }

  ngOnInit() {
    this.title = 'Mi historial';
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
