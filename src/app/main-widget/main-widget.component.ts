import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-main-widget',
  templateUrl: './main-widget.component.html',
  styleUrls: ['./main-widget.component.css']
})
export class MainWidgetComponent implements OnInit {

  @Input() info;
  constructor() { }

  ngOnInit() {
    console.log(this.info); 
  }

}
