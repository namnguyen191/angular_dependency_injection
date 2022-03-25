import {
  AfterViewInit,
  Component,
  ContentChild,
  OnInit,
  Optional,
} from '@angular/core';
import { HeaderToken } from './widget-header.component';

@Component({
  selector: 'lib-widget',
  template: `
    <section class="wrapper">
      <ng-content></ng-content>
      <section></section>
    </section>
  `,
  styles: [],
})
export class WidgetComponent implements OnInit, AfterViewInit {
  @ContentChild(HeaderToken)
  header: HeaderToken | null = null;

  constructor(@Optional() private anotherHeader: HeaderToken) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.anotherHeader.refresh();
  }
}
