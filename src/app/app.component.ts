import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { ThemePalette } from '@angular/material/core';
import { LoaderService } from './services/loader.service';
import { StoreService } from './services/store.service';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bank-app-analysis-section';
  background: ThemePalette = 'primary'
  loading$ = this.loader.loading$;
  buttonStatus = true;
  messages: any[] = [];
  subscription: Subscription = new Subscription;
  


  constructor(public router: Router, public loader: LoaderService, public store: StoreService) { 
    // this.store.asObs
    this.subscription = this.store.onMessage().subscribe(message => {
      if (message) {
        this.messages.push(message)
        this.buttonStatus = false;
      } else {
        this.messages = [];
        
      }
    })
  }
  ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    }

}
