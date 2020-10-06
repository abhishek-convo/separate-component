import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingsComponentDesktop } from './settings/settings.component.desktop';
import { SettingsComponentMobile } from './settings/settings.component.mobile';

const desk_routes: Routes = [
  {
    path: '',
    component: SettingsComponentDesktop,
  },
];

const mob_routes: Routes = [
  {
    path: '',
    component: SettingsComponentMobile,
  },
];
let routes = desk_routes;
if (window.innerWidth < 768) {
  routes = mob_routes;
} else {
  routes = desk_routes;
}

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsRoutingModule {}
