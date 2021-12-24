import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  responseData = []

  constructor() { }

  onSave(data: any) {
    this.responseData = data
  }
}
