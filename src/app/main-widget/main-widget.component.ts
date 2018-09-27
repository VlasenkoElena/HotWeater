import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../services/data.service';
import { Info } from '../model/interface';

@Component({
  selector: 'app-main-widget',
  templateUrl: './main-widget.component.html',
  styleUrls: ['./main-widget.component.css']
})
export class MainWidgetComponent implements OnInit {

  @Input() information;
  info: Info;
  
  constructor(private dataService: DataService) { }

  ngOnInit() {
    const detail = this.dataService.mySubject
    .subscribe((data) => {
       this.info= data;
    }
   )
  }
}
