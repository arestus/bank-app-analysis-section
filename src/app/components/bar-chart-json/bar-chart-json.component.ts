import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import * as d3Csv from 'd3';

@Component({
  selector: 'app-bar-chart-json',
  templateUrl: './bar-chart-json.component.html',
  styleUrls: ['./bar-chart-json.component.css']
})
export class BarChartJsonComponent implements OnInit {

  constructor(private http: HttpClient) {
    
   }

  ngOnInit(): void {
   
  }

}
