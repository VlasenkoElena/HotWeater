import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { AutoUnsubscribe } from '../auto-unsubscribe';
import { takeUntil } from 'rxjs/operators';
import { Info } from '../model/interface';

@Component({
  selector: 'app-follower-widget',
  templateUrl: './follower-widget.component.html',
  styleUrls: ['./follower-widget.component.css']
})
export class FollowerWidgetComponent extends AutoUnsubscribe implements OnInit {

  item: Info;
  constructor(private dataService: DataService) {
    super()
   }

  ngOnInit() {
    this.dataService.mySubject
    .pipe(takeUntil(this.unsubscribe))
    .subscribe((data) => {
       this.item= data;
    }
   )
  }

}
