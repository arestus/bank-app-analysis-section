import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import * as d3 from 'd3-selection';
import * as d3Scale from 'd3-scale';
import * as d3Array from 'd3-array';
import * as d3Axis from 'd3-axis';
import * as d3json from 'd3';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-bar-chart-json',
  templateUrl: './bar-chart-json.component.html',
  styleUrls: ['./bar-chart-json.component.css']
})
export class BarChartJsonComponent implements OnInit {

    currentRate = 8;
  title = 'Bar-char';
  width: number;
  height: number;
  margin = { top: 20, right: 20, bottom: 30, left: 40 };
  x: any;
  y: any;
  svg: any;
  g: any;
  dataTest:any;
  color: any;
  data: any;

  constructor(private http: HttpClient, private save: StoreService) {
    this.width = 900 - this.margin.left - this.margin.right;
    this.height = 500 - this.margin.top - this.margin.bottom;
   }

  ngOnInit() {
    this.data = this.save.responseData
    // d3json.json(this.data).then(data => {
       console.log(this.data);
      
      // this.initSvg();
      // this.initAxis(this.data);
      // this.drawAxis();
      // this.drawBars(this.data)
      
    // });
    
  }

  initSvg() {
    this.color = d3Scale.scaleOrdinal()
    .range(['#FFA500', '#00FF00', '#FF0000', '#6b486b', '#FF00FF', '#d0743c', '#00FA9A']);
    this.svg = d3.select('#barChart')
      .append('svg')
      .attr('width', '100%')
      .attr('height', '100%')
      .attr('viewBox', '0 0 900 500');
    this.g = this.svg.append('g')
      .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');
  }

  initAxis(data:any) {
    this.x = d3Scale.scaleBand().rangeRound([0, this.width]).padding(0.1);
    this.y = d3Scale.scaleLinear().rangeRound([this.height, 0]);
    this.x.domain(data.map((d:any) => d.DATE));
    this.y.domain([0, d3Array.max(data, (d:any) => Number(d.WITHDRAWALS))]);

  }
 
  drawAxis() {
    this.g.append('g')
      .attr('class', 'axis axis--x')
      .attr('transform', 'translate(0,' + this.height + ')')
      .call(d3Axis.axisBottom(this.x));
    this.g.append('g')
      .attr('class', 'axis axis--y')
      .call(d3Axis.axisLeft(this.y))
      .append('text')
      .attr('class', 'axis-title')
      .attr('transform', 'rotate(-90)')
      .attr('y', 6)
      .attr('dy', '0.71em')
      .attr('text-anchor', 'end')
      .text('Frequency');
  }

  drawBars(data:any) {

    
    this.g.selectAll('.bar')
      .data(data)
      .enter().append('rect')
      .attr('class', 'bar')
      .attr('x', (d:  any) => this.x(d.DATE))
      .attr('y', (d:  any) => this.y(Number(d.WITHDRAWALS)))
      .attr('width', this.x.bandwidth())
      .attr('fill',(d: any) => this.color(d.DATE) )
      .attr('height', (d:  any) => this.height - this.y(Number(d.WITHDRAWALS)));
  }

}
