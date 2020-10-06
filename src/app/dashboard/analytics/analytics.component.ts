import { Router } from '@angular/router';
import { AnalyticsComponentModel } from './analytics.component.model';

export abstract class AnalyticsComponent {
  private model: AnalyticsComponentModel;
  public myViewModel: AnalyticsComponentModel;

  constructor(private router: Router) {
    this.model = new AnalyticsComponentModel();
    this.myViewModel = new AnalyticsComponentModel();

    this.updateView();
  }

  updateView() {
    this.myViewModel = this.model;
  }
}
