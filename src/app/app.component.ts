import { Component, OnInit } from '@angular/core';
import { Info } from './model/interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  info: Info[] = [
    { 
      title: 'Nature',
      phone: '+1285 968 685',
      followers: 2850,
      following: 675,
      photo: [
        'http://localhost:4200/assets/img/1.jpg',
        'http://localhost:4200/assets/img/b1.jpg'
      ],
      weather: {
        temp: 14,
        cloudy: 'http://localhost:4200/assets/img/cloudy.png',
        water: 20
      }
    },

    {
      title: 'Beach',
      phone: '+1345 928 685',
      followers: 1450,
      following: 375,
      photo: [
        'http://localhost:4200/assets/img/2.jpg',
        'http://localhost:4200/assets/img/res_g.jpg'
      ],
      weather: {
        temp: 20,
        cloudy: 'http://localhost:4200/assets/img/cloudy.png',
        water: 22
      }
    },

    {
      title: 'Mountain',
      phone: '+1200 222 454',
      followers: 3220,
      following: 505,
      photo: [
        'http://localhost:4200/assets/img/gora.jpg',
        'http://localhost:4200/assets/img/rest03.jpg'
      ],
      weather: {
        temp: 30,
        cloudy: 'http://localhost:4200/assets/img/cloudy.png',
        water: 26
      }
    }
  ]
 
 ngOnInit() {
  }

}
