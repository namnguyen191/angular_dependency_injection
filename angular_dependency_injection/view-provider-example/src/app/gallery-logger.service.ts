import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GalleryLoggerService {
  constructor() {}

  log(msg: string) {
    console.log('GalleryLoggerService: ', msg);
  }
}
