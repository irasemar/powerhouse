import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit {

  title: string;
  list: Array<Object>;

  
  constructor() { }
  
  ngOnInit() {
    this.title = "Mi Perfil";
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
