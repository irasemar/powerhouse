import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
})
export class AwardsComponent implements OnInit {

  title: string
  active : number;
  constructor() { }

  ngOnInit() {
    this.title = 'Power points'
  }

}
