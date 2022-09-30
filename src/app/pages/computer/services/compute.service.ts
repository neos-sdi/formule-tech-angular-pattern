import { Injectable, Injector } from '@angular/core';
import { Computer, GenericComputer, Operators } from '../../../models/computer';
import { AddService } from './add.service';
import { DivideService } from './divide.service';
import { MultiplyService } from './multiply.service';
import { SubstractService } from './substract.service';

@Injectable({
  providedIn: 'root'
})
export class ComputeService implements GenericComputer {

  constructor(private injector: Injector) { }

  compute(num1: number, num2: number, strategy: Operators): string {
    return this.injector.get<Computer>(this.ComputerStrategyMap.get(strategy)).compute(num1, num2)
  }

  private ComputerStrategyMap = new Map<Operators, any>([
    [Operators.add, AddService],
    [Operators.divide, DivideService],
    [Operators.multiply, MultiplyService],
    [Operators.substract, SubstractService]
  ])
}
