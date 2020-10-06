import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AnalyticsComponent } from './analytics.component';

@Component({
  selector: 'app-analytics-desktop',
  templateUrl: './analytics.component.desktop.html',
  styleUrls: ['./analytics.component.desktop.scss'],
})
export class AnalyticsComponentDesktop extends AnalyticsComponent {
  constructor(router: Router) {
    super(router);
  }
}
