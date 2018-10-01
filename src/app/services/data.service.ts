import { Injectable } from "@angular/core";
import { BehaviorSubject, of, Observable } from "rxjs";
import { Info } from "../model/interface";

@Injectable()
export class DataService {
  public mySubject: BehaviorSubject<Info>;

  constructor() {
    this.mySubject = new BehaviorSubject({
     title: "Nature",
     phone: "+1285 968 685",
     followers: 2850,
     following: 675,
     type: 'hotel',
     photo: [
       "http://localhost:4200/assets/img/1.jpg",
       "http://localhost:4200/assets/img/b1.jpg"
     ],
     weather: {
       temp: 14,
       cloudy: "http://localhost:4200/assets/img/cloudy.png",
       water: 20
     }
   },
   )
 }

 public getData(): Observable<Info[]> {
 const info: Info[] = [
    { 
      title: 'Nature',
      phone: '+1285 968 685',
      followers: 2850,
      following: 675,
      type: 'hotel',
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
      type: 'hotel',
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
      type: 'hotel',
      photo: [
        'http://localhost:4200/assets/img/gora.jpg',
        'http://localhost:4200/assets/img/rest03.jpg'
      ],
      weather: {
        temp: 30,
        cloudy: 'http://localhost:4200/assets/img/cloudy.png',
        water: 26
      }
    },

    {
      title: 'Fifteen',
      phone: '+1200 000 454',
      followers: 5000,
      following: 705,
      type: 'rest',
      photo: [
        'http://localhost:4200/assets/img/rest03.jpg',
        'http://localhost:4200/assets/img/gora.jpg'
      ],
      weather: {
        temp: 21,
        cloudy: 'http://localhost:4200/assets/img/cloudy.png',
        water: 17
      }
    },
    {
      title: 'Paramount',
      phone: '+1200 000 000',
      followers: 1000,
      following: 405,
      type: 'rest',
      photo: [
        'http://localhost:4200/assets/img/res_g.jpg',
        'http://localhost:4200/assets/img/2.jpg'
      ],
      weather: {
        temp: 25,
        cloudy: 'http://localhost:4200/assets/img/cloudy.png',
        water: 22
      }
    }
  ];

  return of(info);
}

  addData(info) {
    this.mySubject.next(info);
  }
}
