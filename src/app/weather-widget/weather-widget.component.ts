import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Info } from '../model/interface';

@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.css']
})
export class WeatherWidgetComponent implements OnInit {
 
  info: Info;
  constructor(private dataService: DataService) { }


  ngOnInit() {
    const detail = this.dataService.mySubject
    .subscribe((data) => {
       this.info = data;
    }
   )
  }
}
