import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
})
export class UpcomingComponent implements OnInit {

  title: string;
  active : number;
  constructor() { }

  ngOnInit() {
    this.title = "Mis próximas clases";
  }

}
