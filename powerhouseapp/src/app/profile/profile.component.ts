import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit {

  title: string;
  
  constructor() { }

  ngOnInit() {
    this.title = "Mi Perfil";
  }

}
