import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';

import * as d3 from 'd3-selection';
import * as d3Scale from 'd3-scale';
import * as d3Shape from 'd3-shape';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {
  responseData: any
  // private svg;
  // private margin = 50;
  // private width = 750;
  // private height = 600;
  // // The radius of the pie chart is half the smallest side
  // private radius = Math.min(this.width, this.height) / 2 - this.margin;
  private colors;
  dataForPie: any = [];

    margin = { top: 20, right: 20, bottom: 30, left: 50 };
  width: number;
  height: number;
  radius: number;

  arc: any;
  labelArc: any;
  labelPer: any;
  pie: any;
  color: any;
  svg: any;

  constructor(private save: StoreService) {
    this.width = 900 - this.margin.left - this.margin.right;
    this.height = 500 - this.margin.top - this.margin.bottom;
    this.radius = Math.min(this.width, this.height) / 2;
   }

  sumSameData(data: any) {
    console.log(data);
    let cardData = data

    var holder = {};

      cardData.forEach(function(d) {
        if (holder.hasOwnProperty(d.transaction_remark)) {
          holder[d.transaction_remark] = holder[d.transaction_remark] + d.withdraw;
        } else {
          holder[d.transaction_remark] = d.withdraw;
        }
      });


      for (var item in holder) {
        this.dataForPie.push({ name: item, value: holder[item] });
      }

      console.log(this.dataForPie);
    // userCredit.reduce(function (res: any, value: any) {
    //   if (!res[value.activity]) {
    //     res[value.activity] = { Id: value.activity, amount: 0 };
    //     result.push(res[value.activity])
    //   }
    //   res[value.activity].amount += value.amount;
    //   return res;
    // }, {});
  }

  ngOnInit(): void {
    this.responseData = this.save.newArray 
    console.log(this.responseData);
    this.initSvg();
    this.drawPie(this.sumSameData(this.responseData));
    //this.sumSameData(this.responseData)
    // this.createSvg();
    // this.createColors();
    // this.drawChart(this.sumSameData(this.responseData));
  
    
  }

   initSvg() {
    this.color = d3Scale
      .scaleOrdinal()
      .range([
        '#FFA500',
        '#00FF00',
        '#FF0000',
        '#6b486b',
        '#FF00FF',
        '#d0743c',
        '#00FA9A',
      ]);
    this.arc = d3Shape
      .arc()
      .outerRadius(this.radius - 70)
      .innerRadius(5);
    this.labelArc = d3Shape
      .arc()
      .outerRadius(this.radius - 40)
      .innerRadius(this.radius - 40);

    this.labelPer = d3Shape
      .arc()
      .outerRadius(this.radius - 80)
      .innerRadius(this.radius - 80);

    this.pie = d3Shape
      .pie()
      .sort(null)
      .value((d: any) => Number(d.value));

    this.svg = d3
      .select('#pieChartCsv')
      .append('svg')
      .classed('test', true)
      .attr('width', '100%')
      .attr('height', '100%')
      .attr('class', 'test')
      .attr(
        'viewBox',
        '0 0 ' +
          Math.min(this.width, this.height) +
          ' ' +
          Math.min(this.width, this.height)
      )
      .append('g')
      .attr(
        'transform',
        'translate(' +
          Math.min(this.width, this.height) / 2 +
          ',' +
          Math.min(this.width, this.height) / 2 +
          ')'
      );
  }

  drawPie(data: any) {
    console.log(data);

    const g = this.svg
      .selectAll('.arc')
      .data(this.pie(data))
      .enter()
      .append('g')
      .attr('class', 'arc');
    g.append('path')
      .attr('d', this.arc)
      .style('fill', (d: any) => this.color(d.data.name))
      .attr('opacity', '0.5')
    g.append('text')
      .attr(
        'transform',
        (d: any) => 'translate(' + this.labelArc.centroid(d) + ')'
      )
      .attr('dy', '0.35em')
      .attr('dx', '-4.35em')
      .style('font-weight', 'bold')
      .style('z-index', '5')
      .text((d: any) => d.data.name);

    g.append('text')
      .attr(
        'transform',
        (d: any) => 'translate(' + this.labelPer.centroid(d) + ')'
      )
      .attr('dy', '.25em')
      .text((d: any) => '$' + Number(d.data.value))
      .style('font-weight', 'bold')
      .style('z-index', '5');
  }
}
