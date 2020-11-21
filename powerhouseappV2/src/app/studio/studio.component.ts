import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-studio',
  templateUrl: './studio.component.html',
  styleUrls: ['./studio.component.sass']
})
export class StudioComponent implements OnInit {

  constructor(private router: Router,) { }

  ngOnInit() {
  }

  ReservarHiit() {
    this.router.navigate(['/indoor-calendar/']);
  }
  
  ReservarTrain() {
    this.router.navigate(['/hiit-calendar/']);
  }
}
