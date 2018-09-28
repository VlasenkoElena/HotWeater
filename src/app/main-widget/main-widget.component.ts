import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../services/data.service';
import { Info } from '../model/interface';
import { AutoUnsubscribe } from '../auto-unsubscribe';
import { takeUntil } from 'rxjs/operators';


@Component({
  selector: 'app-main-widget',
  templateUrl: './main-widget.component.html',
  styleUrls: ['./main-widget.component.css'],
})

export class MainWidgetComponent extends AutoUnsubscribe implements OnInit  {

  @Input() information;
  @Input() appStyle;
  info: Info;
  type = 'all';
  
  constructor(private dataService: DataService) {
    super()
   }

  ngOnInit() {
    this.dataService.mySubject
    .pipe(takeUntil(this.unsubscribe))
    .subscribe((data) => {
       this.info= data;
    }
   )
  }
}
