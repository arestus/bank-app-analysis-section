import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ThemePalette} from '@angular/material/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bank-app-analysis-section';
  background: ThemePalette = 'primary'

  constructor(public router: Router){}

  logout_bankuser(){
    localStorage.clear()

    this.router.navigate(['/']);
  }

}
