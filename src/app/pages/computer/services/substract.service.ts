import { Injectable } from '@angular/core';
import { Computer } from '../../../models/computer';

@Injectable({
  providedIn: 'root'
})
export class SubstractService implements Computer {

  constructor() { }
  compute(num1: number, num2: number): string {
    return (num1 - num2).toString()
  }
}
