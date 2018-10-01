import { Component, OnInit } from '@angular/core';
import { Info } from './model/interface';
import { DataService } from './services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  info: Observable<Info[]>
  constructor(public dataService: DataService) {
  }

 ngOnInit() {
   this.info = this.dataService.getData();
  }
}
