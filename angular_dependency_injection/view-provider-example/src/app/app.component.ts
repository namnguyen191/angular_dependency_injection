import { Component } from '@angular/core';
import { GalleryLoggerService } from './gallery-logger.service';
import { GallerySlideLoggerService } from './gallery-slide-logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    {
      provide: GalleryLoggerService,
      useExisting: GallerySlideLoggerService,
    },
  ],
})
export class AppComponent {
  title = 'view-provider-example';
}
