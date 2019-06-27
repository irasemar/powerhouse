import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  active: number;
  lista: Array<Object>;

  constructor() { }

  ngOnInit() {
    this.lista = [
      {
        "title": "Powerhouse",
        "url": "/home"
      },
      {
        "title": "Powerteam/Coaches",
        "url": "/team"
      },
      {
        "title": "Estudio",
        "url": "/estudio"
      },
      {
        "title": "Motto",
        "url": "/motto"
      }
    ]

    this.active = 0;
    
  }


}
