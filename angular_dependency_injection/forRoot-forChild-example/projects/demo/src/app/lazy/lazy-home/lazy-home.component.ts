import { Component, OnInit } from '@angular/core';
import { PollingService } from 'polling';

@Component({
  selector: 'app-lazy-home',
  templateUrl: './lazy-home.component.html',
  styleUrls: ['./lazy-home.component.css'],
})
export class LazyHomeComponent implements OnInit {
  constructor(public polling: PollingService) {}

  ngOnInit(): void {}
}
