import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  responseData = []
  arrayOfObj
  newArray: any = [];
  private subject = new Subject<any>();


  constructor() { }

  onSave(data: any) {
    this.newArray = []
    this.responseData = data['Value Date']
    for (let e in this.responseData) {
      let newObject = {}
      newObject['value_date'] = this.responseData[e][0]
      newObject["transaction_date"] = this.responseData[e][1]
      newObject["transaction_remark"] = this.responseData[e][2]
      newObject["withdraw"] = this.responseData[e][3]
      newObject["deposit"] = this.responseData[e][4]
      newObject["balance"] = this.responseData[e][5]
      this.newArray.push(newObject)
    }
    console.log(this.newArray)
  }

  sendMessage(message: string) {
        this.subject.next({ text: message });
    }

    clearMessages() {
        this.subject.next();
    }

    onMessage(): Observable<any> {
        return this.subject.asObservable();
    }

  // convertObjectToArrayOfObject(data: any) {
  //   for (let key in data) {
  //     let obj = data[key];
  //     for (let innerKey in obj) {
  //       let newObject = {
  //         'Value Date': 0,
  //         'Balance': '',
  //         'Transaction Remarks': '',
  //         'Deposit Amount': 0,
  //         'Withdrawal Amount': 0,
  //         'Transaction Date': 0,
  //       };
  //       if (key === 'Value Date') {
  //         newObject['Value Date'] = obj[innerKey]
  //         this.newArray.push(newObject)
  //       } else {
  //         this.newArray[Number(innerKey)][key] = obj[innerKey]
  //       }
  //     }
  //   }
  //   console.log(this.newArray);
  // }
}
