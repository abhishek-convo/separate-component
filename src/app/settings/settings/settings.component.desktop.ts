import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SettingsComponent } from './settings.component';

@Component({
  selector: 'app-settings-desktop',
  templateUrl: './settings.component.desktop.html',
  styleUrls: ['./settings.component.desktop.scss'],
})
export class SettingsComponentDesktop extends SettingsComponent {
  constructor(router: Router) {
    super(router);
  }

  toFeaturePage(type) {
    this.router.navigateByUrl(`/${type}`);
  }
}
