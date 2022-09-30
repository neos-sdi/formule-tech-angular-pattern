import { Injectable } from '@angular/core';
import { Computer } from '../../../models/computer';

@Injectable({
  providedIn: 'root'
})
export class AddService implements Computer {

  constructor() { }
  compute(num1: number, num2: number): string {
    const result = parseInt(num1.toString()) + parseInt(num2.toString())
    return result.toString()
  }
}
