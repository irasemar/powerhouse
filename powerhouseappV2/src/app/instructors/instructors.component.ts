import { Component, OnInit } from '@angular/core';
import { CatalogsService } from "../services/catalogs.service";

@Component({
  selector: 'app-instructors',
  templateUrl: './instructors.component.html',
})
export class InstructorsComponent implements OnInit {

  instructors= [];

  constructor( private catalog: CatalogsService, ) { }

  ngOnInit() {
    
    /* this.instructors = [
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
    ] */
  }
  ngAfterViewInit() {
		setTimeout(() => {
      this.catalog.getInstructorsWH(1).subscribe(instructores =>{this.instructors = instructores;console.log(this.instructors);});
    });
  }

}
