import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userdata',
  templateUrl: './userdata.component.html',
})
export class UserdataComponent implements OnInit {

  username: string;
  lessons:number;
  year: number;

  constructor() { }

  ngOnInit() {
    this.username = 'Ana Lucía Valderrama';
    this.lessons = 0;
    this.year = 2019;
  }

}
