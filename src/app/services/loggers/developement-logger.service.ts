import { Injectable } from '@angular/core';
import { Logger } from './logger';

@Injectable()
export class DevelopementLoggerService implements Logger {

  constructor() { }
  log(message?: any, ...optionalParams: any[]): void {
    console.log(message, optionalParams)
  }
}
