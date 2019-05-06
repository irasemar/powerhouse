import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
})
export class HistoryComponent implements OnInit {

  title: string;

  constructor() { }

  ngOnInit() {
    this.title = 'Mi historial'
  }

}
