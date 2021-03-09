import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export  default class CurrencyService {
  indianRupee:number;
  usd:number;
  constructor() { }
  public convertToRupee(USD:number):number
  {
     this.indianRupee=USD*73.18;
     return this.indianRupee;
  }
  public convertToUSD(rupee:number):number
  {
      this.indianRupee=73.18;
      this.usd=rupee/this.indianRupee;
      return this.usd;
  }
}
