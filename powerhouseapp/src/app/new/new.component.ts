import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
})
export class NewComponent implements OnInit {
  hiit: any;
  lista: Array<Object>;
  hiits: any[];
  rides: any[];
  indoorlink: any;
  hiitlink: any;
  powerlink: any;
  

  constructor() { }

  ngOnInit() {

    this.lista = [
      {
        "title": "Powerhouse",
        "url": "./home"
      },
      {
        "title": "Classes",
        "url": "./classes"
      },
      {
        "title": "Power Team",
        "url": "./powerteam"
      },
      {
        "title": "Estudio",
        "url": "./estudio"
      },
      {
        "title": "Life Motto",
        "url": "./motto"
      }
    ]
    this.hiits = [
      [
        {
          src: '../assets/images/hitts-1.png',
          title: 'LOWER',
          description: 'Nuestro clásico "Full Body Workout" Ejercicios cardiovasculares de alta intensidad con fuerza y coreografía basada en ritmo. '
        },
        {
          src: '../assets/images/hitts-2.png',
          title: 'UPPER',
          description: 'Una versión de 60 minutos de nuestra clásica "45 min ride". '
        },
        {
          src: '../assets/images/hitts-3.png',
          title: 'POWERFULL',
          description: '45 minutos de intervalos cronometrados de alta intensidad y series extra de fuerza en la bicicleta.'
        },
        {
          src: '../assets/images/hitts-4.png',
          title: 'DANCE CARDIO',
          description: 'Un reto de hora y media basada en nuestro clásico "45 min ride".'
        }
      ],
      [
        {
          src: '../assets/images/rides-1.png',
          title: '45 MIN RIDE 2',
          description: 'Nuestro clásico "Full Body Workout" Ejercicios cardiovasculares de alta intensidad con fuerza y coreografía basada en ritmo. '
        },
        {
          src: '../assets/images/rides-2.png',
          title: '60 MIN RIDE 2',
          description: 'Una versión de 60 minutos de nuestra clásica "45 min ride". '
        },
        {
          src: '../assets/images/rides-1.png',
          title: 'POWER RIDE 2',
          description: '45 minutos de intervalos cronometrados de alta intensidad y series extra de fuerza en la bicicleta.'
        },
        {
          src: '../assets/images/rides-2.png',
          title: 'POWER RIDE 2',
          description: 'Un reto de hora y media basada en nuestro clásico "45 min ride".'
        }
      ]
    ]
    this.rides = [
      [
        {
          src: '../assets/images/rides-1.png',
          title: '45 MIN RIDE',
          description: 'Nuestro clásico "Full Body Workout" Ejercicios cardiovasculares de alta intensidad con fuerza y coreografía basada en ritmo. '
        },
        {
          src: '../assets/images/rides-2.png',
          title: '60 MIN RIDE',
          description: 'Una versión de 60 minutos de nuestra clásica "45 min ride". '
        },
        {
          src: '../assets/images/rides-1.png',
          title: 'POWER RIDE',
          description: '45 minutos de intervalos cronometrados de alta intensidad y series extra de fuerza en la bicicleta.'
        },
        {
          src: '../assets/images/rides-2.png',
          title: 'POWER RIDE',
          description: 'Un reto de hora y media basada en nuestro clásico "45 min ride".'
        }
      ],
      [
        {
          src: '../assets/images/rides-1.png',
          title: '45 MIN RIDE 2',
          description: 'Nuestro clásico "Full Body Workout" Ejercicios cardiovasculares de alta intensidad con fuerza y coreografía basada en ritmo. '
        },
        {
          src: '../assets/images/rides-2.png',
          title: '60 MIN RIDE 2',
          description: 'Una versión de 60 minutos de nuestra clásica "45 min ride". '
        },
        {
          src: '../assets/images/rides-1.png',
          title: 'POWER RIDE 2',
          description: '45 minutos de intervalos cronometrados de alta intensidad y series extra de fuerza en la bicicleta.'
        },
        {
          src: '../assets/images/rides-2.png',
          title: 'POWER RIDE 2',
          description: 'Un reto de hora y media basada en nuestro clásico "45 min ride".'
        }
      ]
    ]
    this.indoorlink = 1;
    this.hiitlink = 1;
    this.powerlink = 2;
    
  }


}
