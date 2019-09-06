import { Component, OnInit } from '@angular/core';
import { AuthService, Account} from "../../../../services/auth.services";
import { Router } from '@angular/router';
@Component({
  selector: 'fury-toolbar-user-button',
  templateUrl: './toolbar-user-button.component.html',
  styleUrls: ['./toolbar-user-button.component.scss']
})
export class ToolbarUserButtonComponent implements OnInit {

  isOpen: boolean;
  session = {} as Account;
  constructor(private auth:AuthService,private router: Router) {
    this.session = this.auth.getAccount();
   }

  ngOnInit() {
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  onClickOutside() {
    this.isOpen = false;
  }

  logOut(){
    this.auth.logout();
    this.router.navigate(['/']);
  }

}
