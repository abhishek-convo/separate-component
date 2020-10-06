import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AnalyticsComponent } from './analytics.component';

@Component({
  selector: 'app-analytics-mobile',
  templateUrl: './analytics.component.mobile.html',
  styleUrls: ['./analytics.component.mobile.scss'],
})
export class AnalyticsComponentMobile extends AnalyticsComponent {
  constructor(router: Router) {
    super(router);
  }
}
