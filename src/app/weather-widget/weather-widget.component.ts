import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Info } from '../model/interface';
import { AutoUnsubscribe } from '../auto-unsubscribe';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.css']
})
export class WeatherWidgetComponent extends AutoUnsubscribe implements OnInit {
 
  info: Info;
  constructor(private dataService: DataService) {
    super()
   }


  ngOnInit() {
    this.dataService.mySubject
    .pipe(takeUntil(this.unsubscribe))
    .subscribe((data) => {
       this.info = data;
    }
   )
  }
}
