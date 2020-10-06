import { Router } from '@angular/router';
import { SettingsComponentModel } from './settings.component.model';

export abstract class SettingsComponent {
  private model: SettingsComponentModel;
  public myViewModel: SettingsComponentModel;

  constructor(public router: Router) {
    this.model = new SettingsComponentModel();
    this.myViewModel = new SettingsComponentModel();

    this.updateView();
  }

  toHomePage() {
    this.router.navigateByUrl('/');
  }

  updateView() {
    this.myViewModel = this.model;
  }
}
