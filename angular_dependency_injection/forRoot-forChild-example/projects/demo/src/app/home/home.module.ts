import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PollingModule } from 'polling';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, PollingModule.withConfig({ interval: 500 })],
  exports: [],
})
export class HomeModule {}
