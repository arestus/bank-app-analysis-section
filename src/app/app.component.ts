import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ThemePalette } from '@angular/material/core';
import { LoaderService } from './services/loader.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bank-app-analysis-section';
  background: ThemePalette = 'primary'
  loading$ = this.loader.loading$;

  constructor(public router: Router,public loader: LoaderService){}

}
