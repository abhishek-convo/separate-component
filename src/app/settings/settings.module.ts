import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings/settings.component';
import { SettingsComponentDesktop } from './settings/settings.component.desktop';
import { SettingsComponentMobile } from './settings/settings.component.mobile';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [SettingsComponentDesktop, SettingsComponentMobile],
  imports: [CommonModule, SettingsRoutingModule, SharedModule],
})
export class SettingsModule {}
