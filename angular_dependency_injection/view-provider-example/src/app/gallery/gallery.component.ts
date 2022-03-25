import { Component, OnInit } from '@angular/core';
import { GalleryLoggerService } from '../gallery-logger.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  // viewProviders: only provide the instance for this component
  // good way to ensure that ng-content has their own instance
  viewProviders: [GalleryLoggerService],
})
export class GalleryComponent implements OnInit {
  constructor(private galleryLogger: GalleryLoggerService) {}

  ngOnInit(): void {
    this.galleryLogger.log('Gallery Component');
  }
}
