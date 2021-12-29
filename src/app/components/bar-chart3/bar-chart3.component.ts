import { Component, OnInit } from '@angular/core';
import { max, mean, min } from 'd3';
import { StoreService } from 'src/app/services/store.service';
import * as d3 from 'd3-selection';
import * as d3Scale from 'd3-scale';
import * as d3Array from 'd3-array';
import * as d3Axis from 'd3-axis';

@Component({
  selector: 'app-bar-chart3',
  templateUrl: './bar-chart3.component.html',
  styleUrls: ['./bar-chart3.component.css']
})
export class BarChart3Component implements OnInit {

  currentRate = 8;
  title = 'Bar-chart3';
  x: any;
  y: any;
  svg: any;
  g: any;
  dataTest:any;
  color: any;
  width: number;
  height: number;
  margin = { top: 20, right: 20, bottom: 30, left: 40 };

  dataChart3 = [
    {
      "stats": "min",
      "value": min(this.save.newArray, (d:any) => Number(d.deposit))
    },
    {
      "stats": "max",
      "value": max(this.save.newArray, (d:any) => Number(d.deposit))
    },
    {
      "stats": "avg",
      "value": mean(this.save.newArray, (d:any) => Number(d.deposit))
    }
  ]

  
  constructor(private save: StoreService) { 
    this.width = 900 - this.margin.left - this.margin.right;
    this.height = 500 - this.margin.top - this.margin.bottom;
  }

  ngOnInit(): void {
      this.initSvg();
      this.initAxis();
      this.drawAxis();
      this.drawBars()
  }


  initSvg() {
    this.color = d3Scale.scaleOrdinal()
    .range(['#FFA500', '#00FF00', '#FF0000', '#6b486b', '#FF00FF', '#d0743c', '#00FA9A']);
    this.svg = d3.select('#barChart3')
      .append('svg')
      .attr('width', '100%')
      .attr('height', '100%')
      .attr('viewBox', '0 0 900 500');
    this.g = this.svg.append('g')
      .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');


      this.svg.append('text')
    .attr('x', -(this.height / 2))
    .attr('y', 0)
    .attr('transform', 'rotate(-90)')
    .attr('text-anchor', 'middle')
    .text('Income')

this.svg.append('text')
    .attr('x', 460)
    .attr('y', 510)
    .attr('text-anchor', 'middle')
    .text('Stats')

  }

  initAxis() {
    this.x = d3Scale.scaleBand().rangeRound([0, this.width]).padding(0.1);
    this.y = d3Scale.scaleLinear().rangeRound([this.height, 0]);
    this.x.domain(this.dataChart3.map((d:any) => d.stats));
    // this.y.domain(this.dataChart3.map((d: any) => d.value));
    this.y.domain([0, d3Array.max(this.save.newArray, (d:any) => Number(d.deposit))])

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

  drawBars() {

    this.g.selectAll('.bar')
      .data(this.dataChart3)
      .enter().append('rect')
      .attr('class', 'bar')
      .attr('x', (d:  any) => this.x(d.stats))
      .attr('y', (d:  any) => this.y(d.value))
      .attr('width', this.x.bandwidth())
      .attr('fill', "#69b3a2")
      .attr('height', (d:  any) => this.height - this.y(d.value))

  }




}
