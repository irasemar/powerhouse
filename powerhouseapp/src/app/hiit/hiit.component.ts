import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hiit',
  templateUrl: './hiit.component.html',
})
export class HiitComponent implements OnInit {

  cupons: any[];

  constructor() { }

  ngOnInit() {
    this.cupons = [
      {
        title: 'Powerhouse',
        text: 'Tu 1er clase',
        price: '$150',
        expiration: '*Expira en 30 dias'
      },
      {
        title: 'Powerhouse',
        text: 'Tu 1er clase',
        price: '$150',
        expiration: '*Expira en 30 dias'
      },
      {
        title: 'Powerhouse',
        text: 'Tu 1er clase',
        price: '$150',
        expiration: '*Expira en 30 dias'
      },
      {
        title: 'Powerhouse',
        text: 'Tu 1er clase',
        price: '$150',
        expiration: '*Expira en 30 dias'
      },
      {
        title: 'Powerhouse',
        text: 'Tu 1er clase',
        price: '$150',
        expiration: '*Expira en 30 dias'
      },
      {
        title: 'Powerhouse',
        text: 'Tu 1er clase',
        price: '$150',
        expiration: '*Expira en 30 dias'
      },
      {
        title: 'Powerhouse',
        text: 'Tu 1er clase',
        price: '$150',
        expiration: '*Expira en 30 dias'
      },
      {
        title: 'Powerhouse',
        text: 'Tu 1er clase',
        price: '$150',
        expiration: '*Expira en 30 dias'
      },
      {
        title: 'Powerhouse',
        text: 'Tu 1er clase',
        price: '$150',
        expiration: '*Expira en 30 dias'
      },
      {
        title: 'Powerhouse',
        text: 'Tu 1er clase',
        price: '$150',
        expiration: '*Expira en 30 dias'
      },
    ]
  }

}
