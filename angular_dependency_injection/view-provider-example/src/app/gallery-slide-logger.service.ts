import { Injectable } from '@angular/core';
import { Logger } from './logger';

@Injectable({
  providedIn: 'root',
})
export class GallerySlideLoggerService implements Logger {
  constructor() {}
  log(msg: string) {
    console.log('GallerySlideLoggerService', msg);
  }
}
