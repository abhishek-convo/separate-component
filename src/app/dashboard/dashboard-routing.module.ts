import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { ApplicationStateService } from '../application-state.service';
import { ConvsComponentDesktop } from './convs/convs.component.desktop';
import { DashboardComponent } from './dashboard.component';
import { StatsComponentDesktop } from './stats/stats.component.desktop';
import { StatsComponentMobile } from './stats/stats.component.mobile';
import { ConvsComponentMobile } from './convs/convs.component.mobile';
import { AnalyticsComponentMobile } from './analytics/analytics.component.mobile';
import { AnalyticsComponentDesktop } from './analytics/analytics.component.desktop';

const desk_routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  { path: 'stats', component: StatsComponentDesktop },
  { path: 'convs', component: ConvsComponentDesktop },
  { path: 'analytics', component: AnalyticsComponentDesktop },
];

const mob_routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  { path: 'stats', component: StatsComponentMobile },
  { path: 'convs', component: ConvsComponentMobile },
  { path: 'analytics', component: AnalyticsComponentMobile },
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
export class DashboardRoutingModule {}
