import { Injectable } from '@angular/core';
import { Reporter } from './reporter';

@Injectable({
  providedIn: 'root',
})
export class EngagingReporterService implements Reporter {
  constructor() {}

  report() {
    console.log('User has been using app for ... seconds!');
  }
}
