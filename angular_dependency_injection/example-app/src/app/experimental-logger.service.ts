import { Inject, Injectable } from '@angular/core';
import { Logger } from './logger';
import { Reporter } from './reporter';
import { REPORTERS } from './reporter.token';

@Injectable({
  providedIn: 'root',
})
export class ExperimentalLoggerService implements Logger {
  prefix = 'root ';

  constructor(@Inject(REPORTERS) private reporters: ReadonlyArray<Reporter>) {}

  log(msg: string) {
    this.reporters.forEach((r) => r.report());
    console.log(`${this.prefix} (experimental): ${msg}`);
  }
}
