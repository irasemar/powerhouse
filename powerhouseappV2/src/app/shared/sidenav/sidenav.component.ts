import { Component, OnInit } from '@angular/core';
import {Input} from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
})
export class SidenavComponent implements OnInit {

  @Input() active: number;
  @Input() list: Array<Object>;;

  constructor() { }

  ngOnInit() {
  }

}
