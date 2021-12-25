import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-bar-chart-json',
  templateUrl: './bar-chart-json.component.html',
  styleUrls: ['./bar-chart-json.component.css']
})
export class BarChartJsonComponent implements OnInit {

  localData;

  constructor(private http: HttpClient, private save: StoreService) {}

  ngOnInit() {
    console.log(this.save.newArray)
  }
}
