import { ModuleWithProviders, NgModule } from '@angular/core';
import { PollingComponent } from './polling.component';
import { INTERVAL, PollingConfig, PollingService } from './polling.service';

@NgModule({
  declarations: [PollingComponent],
  imports: [],
  exports: [PollingComponent],
})
export class PollingModule {
  static forRoot(): ModuleWithProviders<PollingModule> {
    return {
      ngModule: PollingModule,
      providers: [PollingService],
    };
  }

  static forChild(config?: PollingConfig): ModuleWithProviders<PollingModule> {
    return {
      ngModule: PollingModule,
      providers: [
        PollingService,
        {
          provide: INTERVAL,
          useValue: config?.interval || 2000,
        },
      ],
    };
  }

  // a way to combine them both
  static withConfig(
    config?: PollingConfig
  ): ModuleWithProviders<PollingModule> {
    return {
      ngModule: PollingModule,
      providers: [
        PollingService,
        {
          provide: INTERVAL,
          useValue: config?.interval || 2000,
        },
      ],
    };
  }
}
