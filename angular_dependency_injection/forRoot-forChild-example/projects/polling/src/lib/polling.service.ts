import { Inject, Injectable, InjectionToken, Optional } from '@angular/core';
import { shareReplay, timer } from 'rxjs';

export interface PollingConfig {
  interval: number;
}

export const INTERVAL = new InjectionToken<number>('interval');

// before we had the option to providedIn: 'root', we had to use to forRoot
// to make sure that only 1 instance is created at the top level
// forRoot pattern is still useful if we need a way to allow users to config
// settings when creating the service
@Injectable()
export class PollingService {
  polling$ = timer(0, this.interval || 1000).pipe(shareReplay());

  constructor(@Optional() @Inject(INTERVAL) private interval: number) {}
}
