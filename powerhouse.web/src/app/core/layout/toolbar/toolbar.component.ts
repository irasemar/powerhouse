import { Component, Input, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { AuthService, Account } from "../../../services/auth.services";

@Component({
  selector: 'fury-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Input('quickpanel') quickpanel: MatSidenav;

  session = {} as Account;
  constructor(private auth: AuthService) {
    this.session = this.auth.getAccount();
  }

  ngOnInit() { }


}
