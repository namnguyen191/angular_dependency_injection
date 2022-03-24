import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildDirective } from './child.directive';
import { LoggerService } from './logger.service';
import { ParentDirective } from './parent.directive';

@NgModule({
  declarations: [AppComponent, ParentDirective, ChildDirective],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private loggerService: LoggerService) {
    if (this.loggerService) {
      this.loggerService.log('my message');
    }
  }
}
