import { Component, Self, SkipSelf } from '@angular/core';
import { AppConfig, APP_CONFIG } from './config.token';
import { ExperimentalLoggerService } from './experimental-logger.service';
import { LoggerService } from './logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    {
      provide: LoggerService,
      // useClass: use a different class for the service as long as they implement the same interface
      // useExisting: same as useClass but will create a singleton for both LoggerService and ExperimentalLoggerService
      // useValue: can use any object instead of a class
      // useFactory: useful when you need logic to know which class/ object to use
      useFactory: (config: AppConfig) => {
        return config.experimentalEnabled
          ? new ExperimentalLoggerService()
          : new LoggerService(config);
      },
      deps: [APP_CONFIG],
    },
  ],
})
export class AppComponent {
  title = 'example-app';

  // @Optional() prevent crashing if dependency does not exists
  // @Self() only check it's own providers, so ignore anything that's "provided in root"
  // SkipSelf() skip the current providers array
  // Host() use direct parent providers
  constructor(
    @Self() private loggerService: LoggerService,
    @SkipSelf() private parentLogger: LoggerService
  ) {
    if (this.loggerService) {
      this.loggerService.prefix = 'App Component';
      this.loggerService.log('my message');
    }

    parentLogger.log('Hello from app component');
  }
}
