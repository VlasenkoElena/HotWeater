import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Input() info;
  constructor(private dataService: DataService) { }

  ngOnInit() {

  }
  moreDetail() {
    this.dataService.addData(this.info)  
  }

}
