import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-instructors',
  templateUrl: './instructors.component.html',
})
export class InstructorsComponent implements OnInit {

  instructors: any[];

  constructor() { }

  ngOnInit() {
    this.instructors = [
      {
        name: 'Mely',
        image: '../../assets/images/instructor_1.jpeg'
      },
      {
        name: 'Tere Mtz',
        image: '../../assets/images/instructor_2.jpeg'
      },
      {
        name: 'Tere Scott',
        image: '../../assets/images/instructor_3.jpeg'
      },
      {
        name: 'Analú',
        image: '../../assets/images/instructor_1.jpeg'
      },
      {
        name: 'Hector',
        image: '../../assets/images/instructor_2.jpeg'
      },
      {
        name: 'Ale Garza',
        image: '../../assets/images/instructor_3.jpeg'
      },
    ]
  }

}
