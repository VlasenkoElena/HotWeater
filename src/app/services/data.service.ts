import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
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
    photo: [
      "http://localhost:4200/assets/img/1.jpg",
      "http://localhost:4200/assets/img/b1.jpg"
    ],
    weather: {
      temp: 14,
      cloudy: "http://localhost:4200/assets/img/cloudy.png",
      water: 20
    }
  })
}

  addData(info) {
    this.mySubject.next(info);
  }
}
