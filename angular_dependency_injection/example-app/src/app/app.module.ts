import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserReporterService } from './browser-reporter.service';
import { ChildDirective } from './child.directive';
import { EngagingReporterService } from './engaging-reporter.service';
import { LoggerService } from './logger.service';
import { ParentDirective } from './parent.directive';
import { REPORTERS } from './reporter.token';

@NgModule({
  declarations: [AppComponent, ParentDirective, ChildDirective],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    {
      provide: REPORTERS,
      useExisting: BrowserReporterService,
      multi: true,
    },
    {
      provide: REPORTERS,
      useExisting: EngagingReporterService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private loggerService: LoggerService) {
    if (this.loggerService) {
      this.loggerService.log('my message');
    }
  }
}
