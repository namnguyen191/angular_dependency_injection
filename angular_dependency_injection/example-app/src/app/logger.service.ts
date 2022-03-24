import { Inject, Injectable } from '@angular/core';
import { AppConfig, APP_CONFIG } from './config.token';
import { Logger } from './logger';

@Injectable({
  providedIn: 'root',
})
export class LoggerService implements Logger {
  prefix = 'root';

  constructor(@Inject(APP_CONFIG) private config: AppConfig) {
    console.log(this.config);
  }

  log(msg: string) {
    console.log(`Nam data is: ${this.prefix}`, msg);
  }
}
