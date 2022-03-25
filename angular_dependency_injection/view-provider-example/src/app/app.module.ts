import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GallerySlideComponent } from './gallery-slide/gallery-slide.component';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    GallerySlideComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
