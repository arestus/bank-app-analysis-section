import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-bar-chart-json',
  templateUrl: './bar-chart-json.component.html',
  styleUrls: ['./bar-chart-json.component.css']
})
export class BarChartJsonComponent implements OnInit {

  localData;

  constructor(private router: Router, private http: HttpClient, private save: StoreService) {}

  ngOnInit() {
    console.log(this.save.newArray)
    var name = localStorage.getItem('bankUserName')?.toString()

    if(name == null){
      this.router.navigate(['/']);
    }
    else{
      this.router.navigate(['/bar-chart-json']);
    }
  }
}
