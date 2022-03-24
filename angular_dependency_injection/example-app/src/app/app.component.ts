import { Component, SkipSelf } from '@angular/core';
import { ExperimentalLoggerService } from './experimental-logger.service';
import { LoggerService } from './logger.service';

// export function loggerFactory(injector: Injector) {
//   return injector.get(APP_CONFIG).experimentalEnabled
//     ? new ExperimentalLoggerService()
//     : new LoggerService(injector.get(APP_CONFIG));
// }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    // {
    //   provide: LoggerService,
    //   // useClass: use a different class for the service as long as they implement the same interface
    //   // useExisting: same as useClass but will create a singleton for both LoggerService and ExperimentalLoggerService
    //   // useValue: can use any object instead of a class
    //   // useFactory: useful when you need logic to know which class/ object to use. deps
    //   // array and function parameter NEEDS TO BE IN THE SAME ORDER (use injector instead)
    //   useFactory: loggerFactory,
    //   deps: [Injector],
    //   multi: true,
    // },
    // without multi: true, only the last item will be injected and all the previous instance
    // are overriden
    // {
    //   provide: LoggerService,
    //   useValue: LegacyLogger,
    // },
  ],
})
export class AppComponent {
  title = 'example-app';

  // @Optional() prevent crashing if dependency does not exists
  // @Self() only check it's own providers, so ignore anything that's "provided in root"
  // SkipSelf() skip the current providers array
  // Host() use direct parent providers
  constructor(
    private loggerService: ExperimentalLoggerService,
    @SkipSelf() private parentLogger: LoggerService
  ) {
    if (this.loggerService) {
      this.loggerService.prefix = 'App Component';
      this.loggerService.log('my message');
    }

    parentLogger.log('Hello from app component');
  }
}
