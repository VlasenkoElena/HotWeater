import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-follower-widget',
  templateUrl: './follower-widget.component.html',
  styleUrls: ['./follower-widget.component.css']
})
export class FollowerWidgetComponent implements OnInit {

  item;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    const detail = this.dataService.mySubject
    .subscribe((data) => {
       this.item= data;
    }
   )
  }

}
