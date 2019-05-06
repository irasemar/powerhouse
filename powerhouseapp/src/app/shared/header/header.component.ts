import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  logged:boolean = false;
  username:string = 'Analu';
  isNavbarCollapsed = true;
  welcome = false;


  constructor() { }

  ngOnInit() {
  }

  login(){    
    this.welcome = true;
    setTimeout(() => this.welcome = false, 5000);
    
    if(this.logged === false){
      this.logged = true
    }else{
      this.logged = false
    }

    console.log(this.logged)
  }

}
