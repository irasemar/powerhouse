import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from 'src/app/login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  logged:boolean = false;
  username:string = 'Analu';
  isNavbarCollapsed = true;
  welcome = false;


  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  login(){    
    this.welcome = true;
    this.modalService.open(LoginComponent);

    
    setTimeout(() => this.welcome = false, 5000);
    
    if(this.logged === false){
      this.logged = true
    }else{
      this.logged = false
    }

    // console.log(this.logged)
  }

}
