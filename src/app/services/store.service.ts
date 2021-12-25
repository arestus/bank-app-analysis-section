import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  responseData = []
  arrayOfObj
  newArray: any = []

  constructor() { }

  onSave(data: any) {
    this.responseData = data['Value Date']
    //let newArray: any = []
    for (let e in this.responseData) {
      let newObject = { "balance": 0, "value_date": "" }
      newObject['value_date'] = this.responseData[e][0]
      newObject["transaction_date"] = this.responseData[e][1]
      newObject["transaction_remark"] = this.responseData[e][2]
      newObject["withdraw"] = this.responseData[e][3]
      newObject["deposit"] = this.responseData[e][4]
      newObject["balance"] = this.responseData[e][5]
      this.newArray.push(newObject)
      // console.log(this.newArray)

      // console.log(newObject)
      // console.log(this.responseData[e])
    }
    console.log(this.newArray)
    console.log(data)
    //this.arrayOfObj = Object.entries(this.responseData['Value Date']).map((e) => ({ [e[0]]: e[1] }));
    
  }
}
