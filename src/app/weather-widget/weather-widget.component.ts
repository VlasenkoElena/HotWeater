import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Info } from '../model/interface';
import { AutoUnsubscribe } from '../auto-unsubscribe';
import { takeUntil } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.css']
})
export class WeatherWidgetComponent extends AutoUnsubscribe implements OnInit {
 
  info: Observable<Info>;
  constructor(public dataService: DataService) {
    super()
   }

  ngOnInit() {
    this.info = this.dataService.mySubject; 
  }
}
