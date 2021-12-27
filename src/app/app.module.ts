import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


import { AppComponent } from './app.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BarChartJsonComponent } from './components/bar-chart-json/bar-chart-json.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { BarChart2Component } from './components/bar-chart2/bar-chart2.component';
import { BarChart3Component } from './components/bar-chart3/bar-chart3.component';
import { BarChart4Component } from './components/bar-chart4/bar-chart4.component';


@NgModule({
  declarations: [
    AppComponent,
    FileUploadComponent,
    LoginComponent,
    HomeComponent,
    BarChartComponent,
    BarChartJsonComponent,
    PieChartComponent,
    BarChart2Component,
    BarChart3Component,
    BarChart4Component
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatButtonModule,
    MatProgressSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
