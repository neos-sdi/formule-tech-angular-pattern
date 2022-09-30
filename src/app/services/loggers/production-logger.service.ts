import { Injectable } from '@angular/core';
import { Logger } from './logger';

@Injectable()
export class ProductionLoggerService implements Logger {

  constructor() {

  }

  log(message?: any, ...optionalParams: any[]): void {
    console.log('Hello World from production')
  }
}
