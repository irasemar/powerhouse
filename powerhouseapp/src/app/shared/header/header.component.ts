import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

  logged:boolean = true;
  username:string = 'Analu';
  isNavbarCollapsed=true;


  constructor() { }

  ngOnInit() {
  }

}
