import { Component, OnInit } from '@angular/core';
import {Input} from '@angular/core';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { Router } from '@angular/router'

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
})
export class SidenavComponent implements OnInit {

  @Input() active: number;
  @Input() list: Array<Object>;;

  constructor(private router: Router) { }

  ngOnInit() {
  }
  openurl(url) {
    this.router.navigateByUrl(url);
  }
}
