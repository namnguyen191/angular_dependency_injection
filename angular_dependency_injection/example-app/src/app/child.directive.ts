import { Directive, Host } from '@angular/core';
import { LoggerService } from './logger.service';

@Directive({
  selector: '[appChild]',
})
export class ChildDirective {
  constructor(@Host() private logger: LoggerService) {
    this.logger.log('child directive constructor');
  }
}
