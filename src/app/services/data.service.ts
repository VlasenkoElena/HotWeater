import { Injectable } from "@angular/core";
import { BehaviorSubject, of, Observable } from "rxjs";
import { Info } from "../model/interface";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class DataService {
  public mySubject: BehaviorSubject<Info>;

  constructor(private http: HttpClient ) {
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

   getData(): Observable<Info[]> {
   return this.http.get<Info[]>('http://localhost:3000/info/');
}

  addData(info) {
    this.mySubject.next(info);
  }
}
