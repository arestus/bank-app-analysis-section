import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarChart3Component } from './components/bar-chart3/bar-chart3.component';
import { BarChartJsonComponent } from './components/bar-chart-json/bar-chart-json.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { BarChart2Component } from './components/bar-chart2/bar-chart2.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { BarChart4Component } from './components/bar-chart4/bar-chart4.component';
import { RiskAnalysisComponent } from './components/risk-analysis/risk-analysis.component';

const routes: Routes = [
  { path:'', component : LoginComponent },
  { path:'home', component: HomeComponent },
  { path:'file-upload', component: FileUploadComponent },
  { path:'bar-chart', component: BarChartComponent },
  { path:'bar-chart-json', component: BarChartJsonComponent },
  { path:'pie-chart-json', component : PieChartComponent },
  { path:'bar-chart2', component: BarChart2Component },
  { path:'bar-chart3', component: BarChart3Component },
  { path:'bar-chart4', component: BarChart4Component },
  { path:'risk-analysis', component: RiskAnalysisComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
