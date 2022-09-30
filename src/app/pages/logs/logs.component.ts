import { Component, OnInit } from '@angular/core';
import { DevelopementLoggerService } from '../../services/loggers/developement-logger.service';
import { Logger } from '../../services/loggers/logger';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss']
})
export class LogsComponent implements OnInit {

  constructor(private logger: Logger) { }

  ngOnInit(): void {
    this.logger.log('Hello world !')
  }

}
