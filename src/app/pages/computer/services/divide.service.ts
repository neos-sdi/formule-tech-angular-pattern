import { Injectable } from '@angular/core';
import { Computer } from '../../../models/computer';

@Injectable({
  providedIn: 'root'
})
export class DivideService implements Computer {

  constructor() { }
  compute(num1: number, num2: number): string {
    if(parseInt(num2.toString()) === 0){
      return 'ERROR'
    }

    return (num1/num2).toString()
  }
}
