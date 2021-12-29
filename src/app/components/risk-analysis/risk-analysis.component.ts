import { newArray } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/services/loader.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-risk-analysis',
  templateUrl: './risk-analysis.component.html',
  styleUrls: ['./risk-analysis.component.css']
})
export class RiskAnalysisComponent implements OnInit {
  mainData = this.save.newArray;
  personDeposit;
  personWithdraw;
  startDate = '';
  finishDate = '';
  creditAvailable = ''

  constructor(private router: Router, private save: StoreService,private loader: LoaderService,) {
    
    console.log(this.mainData)
  }

  ngOnInit(): void {

    var name = localStorage.getItem('bankUserName')?.toString()

    if(name == null){
      this.router.navigate(['/']);
    }
    else{
      this.router.navigate(['/risk-analysis']);
    }

    //this.mainData = this.save.newArray
    this.checkDeposit()
    this.checkWithdraw()
    this.checkStartDate()
    this.checkFinishDate()
  }

  

  

  checkDeposit() {
    this.personDeposit = this.mainData.map(a => a.deposit).reduce(function (a, b)
    {
      return a + b;
    },0)
    console.log(this.personDeposit)
  }

  checkWithdraw() {
    this.personWithdraw = this.mainData.map(a => a.withdraw).reduce(function (a, b)
    {
      return a + b;
    },0)
    console.log(this.personWithdraw)
  }
  checkStartDate() {
    return this.startDate = this.save.newArray[0]?.value_date
  }
  checkFinishDate() {
    return this.finishDate = this.save.newArray[this.save.newArray.length - 1]?.value_date
  }

  credit() {
    this.loader.show()
    setTimeout(() => {
      this.loader.hide()                          
    
    const financeAppraisal = this.personWithdraw / this.personDeposit * 100
    if (financeAppraisal <= 80) {
      this.creditAvailable = "Congratulations! A loan is available to you in our bank!"
    } else {
      this.creditAvailable = "Sorry, but your expenses account for more than 80% of your income. We are forced to deny you a loan."
    }
    }, 2000);
  }

}
