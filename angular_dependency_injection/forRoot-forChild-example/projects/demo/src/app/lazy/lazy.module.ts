import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PollingModule } from 'polling';
import { LazyHomeComponent } from './lazy-home/lazy-home.component';
import { LazyRoutingModule } from './lazy-module-routing.module';

@NgModule({
  declarations: [LazyHomeComponent],
  imports: [
    CommonModule,
    LazyRoutingModule,
    PollingModule.forChild({ interval: 3000 }),
  ],
})
export class LazyModule {}
