import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-hiit-calendar',
  templateUrl: './hiit-calendar.component.html',
})
export class HiitCalendarComponent implements OnInit {


  weeks: any[];
  showNavigationArrows: boolean = true;
  showNavigationIndicators: boolean = true;

  constructor(config: NgbCarouselConfig) {
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }

  ngOnInit() {
        //Arreglo semanas
        this.weeks = [  
          {
            id: 1,
            days: [
              {
                day: 'Lunes',
                date: '04',
                classes: [
                  {
                    time: '7:15 am',
                    instructor: 'Tere Scott', instructorId: 2,
                    duration: '45 min ride',
                    selection: true
                  },
                  {
                    time: '7:15 am',
                    instructor: 'Tere Scott', instructorId: 2,
                    duration: '45 min ride',
                    selection: false
                  },
                  {
                    time: '8:15am',
                    instructor: 'Tere Scott', instructorId: 2,
                    duration: '45 min ride',
                    selection: false
                  },
                  {
                    time: '9:15am',
                    instructor: 'Tere Scott', instructorId: 2,
                    duration: '45 min ride',
                    selection: false
                  },
                  {
                    time: '10:15am',
                    instructor: 'Tere Scott', instructorId: 2,
                    duration: '45 min ride',
                    selection: false
                  },
                  {
                    time: '11:15am',
                    instructor: 'Tere Scott', instructorId: 2,
                    duration: '45 min ride',
                    selection: false
                  },
                ]
              },
              {
                day: 'Martes',
                date: '05',
                active: true,
                classes: [
                  {
                    time: '7:15 am',
                    instructor: 'Tere Scott', instructorId: 2,
                    duration: '45 min ride',
                    selection: false
                  },
                  {
                    time: '7:15 am',
                    instructor: 'Tere Scott', instructorId: 2,
                    duration: '45 min ride',
                    selection: false
                  },
                  {
                    time: '8:15am',
                    instructor: 'Tere Scott', instructorId: 2,
                    duration: '45 min ride',
                    selection: false
                  },
                  {
                    time: '9:15am',
                    instructor: 'Tere Scott', instructorId: 2,
                    duration: '45 min ride',
                    selection: false
                  },
                  {
                    time: '10:15am',
                    instructor: 'Tere Scott', instructorId: 2,
                    duration: '45 min ride',
                    selection: false
                  },
                  {
                    time: '11:15am',
                    instructor: 'Tere Scott', instructorId: 2,
                    duration: '45 min ride',
                    selection: false
                  },
                ]
              },
              {
                day: 'Miércoles',
                date: '06',
                classes: [
                  {
                    time: '7:15 am',
                    instructor: 'Tere Scott', instructorId: 2,
                    duration: '45 min ride',
                    selection: false
                  },
                  {
                    time: '7:15 am',
                    instructor: 'Tere Scott', instructorId: 2,
                    duration: '45 min ride',
                    selection: false
                  },
                  {
                    time: '8:15am',
                    instructor: 'Tere Scott', instructorId: 2,
                    duration: '45 min ride',
                    selection: false
                  },
                  {
                    time: '9:15am',
                    instructor: 'Tere Scott', instructorId: 2,
                    duration: '45 min ride',
                    selection: false
                  },
                  {
                    time: '10:15am',
                    instructor: 'Tere Scott', instructorId: 2,
                    duration: '45 min ride',
                    selection: false
                  },
                  {
                    time: '11:15am',
                    instructor: 'Tere Scott', instructorId: 2,
                    duration: '45 min ride',
                    selection: false
                  },
                ]
              },
              {
                day: 'Jueves',
                date: '07',
                classes: [
                  {
                    time: '7:15 am',
                    instructor: 'Tere Scott', instructorId: 2,
                    duration: '45 min ride',
                    selection: false
                  },
                  {
                    time: '7:15 am',
                    instructor: 'Tere Scott', instructorId: 2,
                    duration: '45 min ride',
                    selection: false
                  },
                  {
                    time: '8:15am',
                    instructor: 'Tere Scott', instructorId: 2,
                    duration: '45 min ride',
                    selection: false
                  },
                  {
                    time: '9:15am',
                    instructor: 'Tere Scott', instructorId: 2,
                    duration: '45 min ride',
                    selection: false
                  },
                  {
                    time: '10:15am',
                    instructor: 'Tere Scott', instructorId: 2,
                    duration: '45 min ride',
                    selection: false
                  },
                  {
                    time: '11:15am',
                    instructor: 'Tere Scott', instructorId: 2,
                    duration: '45 min ride',
                    selection: false
                  },
                ]
              },
              {
                day: 'Viernes',
                date: '07',
                classes: [
                  {
                    time: '7:15 am',
                    instructor: 'Tere Scott', instructorId: 2,
                    duration: '45 min ride',
                    selection: false
                  },
                  {
                    time: '7:15 am',
                    instructor: 'Tere Scott', instructorId: 2,
                    duration: '45 min ride',
                    selection: false
                  },
                  {
                    time: '8:15am',
                    instructor: 'Tere Scott', instructorId: 2,
                    duration: '45 min ride',
                    selection: false
                  },
                  {
                    time: '9:15am',
                    instructor: 'Tere Scott', instructorId: 2,
                    duration: '45 min ride',
                    selection: false
                  },
                  {
                    time: '10:15am',
                    instructor: 'Tere Scott', instructorId: 2,
                    duration: '45 min ride',
                    selection: false
                  },
                  {
                    time: '11:15am',
                    instructor: 'Tere Scott', instructorId: 2,
                    duration: '45 min ride',
                    selection: false
                  },
                ]
              },
              {
                day: 'Sábado',
                date: '07',
                classes: [
                  {
                    time: '7:15 am',
                    instructor: 'Tere Scott', instructorId: 2,
                    duration: '45 min ride',
                    selection: false
                  },
                  {
                    time: '7:15 am',
                    instructor: 'Tere Scott', instructorId: 2,
                    duration: '45 min ride',
                    selection: false
                  },
                  {
                    time: '8:15am',
                    instructor: 'Tere Scott', instructorId: 2,
                    duration: '45 min ride',
                    selection: false
                  },
                  {
                    time: '9:15am',
                    instructor: 'Tere Scott', instructorId: 2,
                    duration: '45 min ride',
                    selection: false
                  },
                  {
                    time: '10:15am',
                    instructor: 'Tere Scott', instructorId: 2,
                    duration: '45 min ride',
                    selection: false
                  },
                  {
                    time: '11:15am',
                    instructor: 'Tere Scott', instructorId: 2,
                    duration: '45 min ride',
                    selection: false
                  },
                ]
              },
              {
                day: 'Domingo',
                date: '07',
                classes: [
                  {
                    time: '7:15 am',
                    instructor: 'Tere Scott', instructorId: 2,
                    duration: '45 min ride',
                    selection: false
                  },
                  {
                    time: '7:15 am',
                    instructor: 'Tere Scott', instructorId: 2,
                    duration: '45 min ride',
                    selection: false
                  },
                  {
                    time: '8:15am',
                    instructor: 'Tere Scott', instructorId: 2,
                    duration: '45 min ride',
                    selection: false
                  },
                  {
                    time: '9:15am',
                    instructor: 'Tere Scott', instructorId: 2,
                    duration: '45 min ride',
                    selection: false
                  },
                  {
                    time: '10:15am',
                    instructor: 'Tere Scott', instructorId: 2,
                    duration: '45 min ride',
                    selection: false
                  },
                  {
                    time: '11:15am',
                    instructor: 'Tere Scott', instructorId: 2,
                    duration: '45 min ride',
                    selection: false
                  },
                ]
              }
            ]
          },
          {
            id: 2,
            days: [
              {
                day: 'Lunes',
                date: '04',
                active: 'false',
                classes: [
                  {
                    time: '7:15 am',
                    instructor: 'Tere Scott', instructorId: 2,
                    duration: '45 min ride',
                    selection: true
                  },
                  {
                    time: '7:15 am',
                    instructor: 'Tere Scott', instructorId: 2,
                    duration: '45 min ride',
                    selection: false
                  },
                  {
                    time: '8:15am',
                    instructor: 'Tere Scott', instructorId: 2,
                    duration: '45 min ride',
                    selection: false
                  },
                  {
                    time: '9:15am',
                    instructor: 'Tere Scott', instructorId: 2,
                    duration: '45 min ride',
                    selection: false
                  },
                  {
                    time: '10:15am',
                    instructor: 'Tere Scott', instructorId: 2,
                    duration: '45 min ride',
                    selection: false
                  },
                  {
                    time: '11:15am',
                    instructor: 'Tere Scott', instructorId: 2,
                    duration: '45 min ride',
                    selection: false
                  },
                ]
              },
              {
                day: 'Martes',
                date: '05',
                classes: [
                  {
                    time: '7:15 am',
                    instructor: 'Tere Scott', instructorId: 2,
                    duration: '45 min ride',
                    selection: false
                  },
                  {
                    time: '7:15 am',
                    instructor: 'Tere Scott', instructorId: 2,
                    duration: '45 min ride',
                    selection: false
                  },
                  {
                    time: '8:15am',
                    instructor: 'Tere Scott', instructorId: 2,
                    duration: '45 min ride',
                    selection: false
                  },
                  {
                    time: '9:15am',
                    instructor: 'Tere Scott', instructorId: 2,
                    duration: '45 min ride',
                    selection: false
                  },
                  {
                    time: '10:15am',
                    instructor: 'Tere Scott', instructorId: 2,
                    duration: '45 min ride',
                    selection: false
                  },
                  {
                    time: '11:15am',
                    instructor: 'Tere Scott', instructorId: 2,
                    duration: '45 min ride',
                    selection: false
                  },
                ]
              },
              {
                day: 'Miércoles',
                date: '06',
                classes: [
                  {
                    time: '7:15 am',
                    instructor: 'Tere Scott', instructorId: 2,
                    duration: '45 min ride',
                    selection: false
                  },
                  {
                    time: '7:15 am',
                    instructor: 'Tere Scott', instructorId: 2,
                    duration: '45 min ride',
                    selection: false
                  },
                  {
                    time: '8:15am',
                    instructor: 'Tere Scott', instructorId: 2,
                    duration: '45 min ride',
                    selection: false
                  },
                  {
                    time: '9:15am',
                    instructor: 'Tere Scott', instructorId: 2,
                    duration: '45 min ride',
                    selection: false
                  },
                  {
                    time: '10:15am',
                    instructor: 'Tere Scott', instructorId: 2,
                    duration: '45 min ride',
                    selection: false
                  },
                  {
                    time: '11:15am',
                    instructor: 'Tere Scott', instructorId: 2,
                    duration: '45 min ride',
                    selection: false
                  },
                ]
              },
              {
                day: 'Jueves',
                date: '07',
                classes: [
                  {
                    time: '7:15 am',
                    instructor: 'Tere Scott', instructorId: 2,
                    duration: '45 min ride',
                    selection: false
                  },
                  {
                    time: '7:15 am',
                    instructor: 'Tere Scott', instructorId: 2,
                    duration: '45 min ride',
                    selection: false
                  },
                  {
                    time: '8:15am',
                    instructor: 'Tere Scott', instructorId: 2,
                    duration: '45 min ride',
                    selection: false
                  },
                  {
                    time: '9:15am',
                    instructor: 'Tere Scott', instructorId: 2,
                    duration: '45 min ride',
                    selection: false
                  },
                  {
                    time: '10:15am',
                    instructor: 'Tere Scott', instructorId: 2,
                    duration: '45 min ride',
                    selection: false
                  },
                  {
                    time: '11:15am',
                    instructor: 'Tere Scott', instructorId: 2,
                    duration: '45 min ride',
                    selection: false
                  },
                ]
              },
              {
                day: 'Viernes',
                date: '07',
                classes: [
                  {
                    time: '7:15 am',
                    instructor: 'Tere Scott', instructorId: 2,
                    duration: '45 min ride',
                    selection: false
                  },
                  {
                    time: '7:15 am',
                    instructor: 'Tere Scott', instructorId: 2,
                    duration: '45 min ride',
                    selection: false
                  },
                  {
                    time: '8:15am',
                    instructor: 'Tere Scott', instructorId: 2,
                    duration: '45 min ride',
                    selection: false
                  },
                  {
                    time: '9:15am',
                    instructor: 'Tere Scott', instructorId: 2,
                    duration: '45 min ride',
                    selection: false
                  },
                  {
                    time: '10:15am',
                    instructor: 'Tere Scott', instructorId: 2,
                    duration: '45 min ride',
                    selection: false
                  },
                  {
                    time: '11:15am',
                    instructor: 'Tere Scott', instructorId: 2,
                    duration: '45 min ride',
                    selection: false
                  },
                ]
              },
              {
                day: 'Sábado',
                date: '07',
                classes: [
                  {
                    time: '7:15 am',
                    instructor: 'Tere Scott', instructorId: 2,
                    duration: '45 min ride',
                    selection: false
                  },
                  {
                    time: '7:15 am',
                    instructor: 'Tere Scott', instructorId: 2,
                    duration: '45 min ride',
                    selection: false
                  },
                  {
                    time: '8:15am',
                    instructor: 'Tere Scott', instructorId: 2,
                    duration: '45 min ride',
                    selection: false
                  },
                  {
                    time: '9:15am',
                    instructor: 'Tere Scott', instructorId: 2,
                    duration: '45 min ride',
                    selection: false
                  },
                  {
                    time: '10:15am',
                    instructor: 'Tere Scott', instructorId: 2,
                    duration: '45 min ride',
                    selection: false
                  },
                  {
                    time: '11:15am',
                    instructor: 'Tere Scott', instructorId: 2,
                    duration: '45 min ride',
                    selection: false
                  },
                ]
              },
              {
                day: 'Domingo',
                date: '07',
                classes: [
                  {
                    time: '7:15 am',
                    instructor: 'Tere Scott', instructorId: 2,
                    duration: '45 min ride',
                    selection: false
                  },
                  {
                    time: '7:15 am',
                    instructor: 'Tere Scott', instructorId: 2,
                    duration: '45 min ride',
                    selection: false
                  },
                  {
                    time: '8:15am',
                    instructor: 'Tere Scott', instructorId: 2,
                    duration: '45 min ride',
                    selection: false
                  },
                  {
                    time: '9:15am',
                    instructor: 'Tere Scott', instructorId: 2,
                    duration: '45 min ride',
                    selection: false
                  },
                  {
                    time: '10:15am',
                    instructor: 'Tere Scott', instructorId: 2,
                    duration: '45 min ride',
                    selection: false
                  },
                  {
                    time: '11:15am',
                    instructor: 'Tere Scott', instructorId: 2,
                    duration: '45 min ride',
                    selection: false
                  },
                ]
              }
            ]
          }
        ]
  }


}
