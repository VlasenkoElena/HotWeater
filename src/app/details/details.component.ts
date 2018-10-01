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

  color = '#f5f5f5'
  ngOnInit() {  

  }

  moreDetail() {
    console.log(this.info);
    
    this.dataService.addData(this.info);  
  }

}
