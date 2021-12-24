import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarChartJsonComponent } from './components/bar-chart-json/bar-chart-json.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path:'', component : LoginComponent },
  { path:'home', component: HomeComponent },
  { path:'file-upload', component: FileUploadComponent },
  { path: 'bar-chart', component: BarChartComponent },
  { path:'bar-chart-json', component : BarChartJsonComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
