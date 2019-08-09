import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from 'src/app/login/login.component';
import { AuthService, Usuario,} from '../../services/auth.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  logged:boolean = false;
  username:string = '';
  isNavbarCollapsed = true;
  welcome = false;
  LoginResult: string;
  session = {} as Usuario;

  constructor(private modalService: NgbModal, public auth: AuthService, private router: Router,) { }

  ngOnInit() {
    this.LoginResult = 'Valid User';
    this.session = this.auth.getAccount();
    if (this.session) {
      if(this.session.NPK_Usuario > 0) {
        this.logged = true;
        this.username = this.session.Nombre;
      }
    }
  }

  login(){    
    this.welcome = true;
    this.modalService.open(LoginComponent).result.then((result) => {
      this.session = this.auth.getAccount();
      if (this.session) {
        if(this.session.NPK_Usuario > 0) {
          this.logged = true;
          this.username = this.session.Nombre;
        }
      }
      
    }, (reason) => {
      this.LoginResult = 'Invalid';
      this.logged = false;
    });
    setTimeout(() => this.welcome = false, 5000);
  }
  logOut() {
    this.auth.logout();
    this.logged = false;
    this.router.navigate(['/']);
  }

}
