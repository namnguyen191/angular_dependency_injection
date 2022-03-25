import { Component, OnInit } from '@angular/core';
import { GalleryLoggerService } from '../gallery-logger.service';

@Component({
  selector: 'app-gallery-slide',
  templateUrl: './gallery-slide.component.html',
  styleUrls: ['./gallery-slide.component.css'],
})
export class GallerySlideComponent implements OnInit {
  constructor(private loggerService: GalleryLoggerService) {}

  ngOnInit(): void {
    this.loggerService.log('GallerySlideComponent');
  }
}
