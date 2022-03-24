import { Injectable } from '@angular/core';
import { Reporter } from './reporter';

@Injectable({
  providedIn: 'root',
})
export class BrowserReporterService implements Reporter {
  constructor() {}

  report() {
    console.log(`Browser report:
    Browser width - ${window.outerWidth}
    Browser height - ${window.outerHeight}
    `);
  }
}
