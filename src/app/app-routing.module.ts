import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule,
  Router,
  PreloadAllModules,
} from '@angular/router';
import { ApplicationStateService } from './application-state.service';
import { ProductDetailsComponentDesktop } from './product-details/product-details.component.desktop';
import { ProductDetailsComponentMobile } from './product-details/product-details.component.mobile';
import { ProductComponentDesktop } from './product/product.component.desktop';
import { ProductComponentMobile } from './product/product.component.mobile';

const desktop_routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'settings',
    loadChildren: () =>
      import('./settings/settings.module').then((m) => m.SettingsModule),
  },
  { path: 'group/:id', component: ProductComponentDesktop },
  { path: 'group/details/:id', component: ProductDetailsComponentDesktop },
];

const mobile_routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'settings',
    loadChildren: () =>
      import('./settings/settings.module').then((m) => m.SettingsModule),
  },
  { path: 'group/:id', component: ProductComponentMobile },
  { path: 'group/details/:id', component: ProductDetailsComponentMobile },
];

@NgModule({
  imports: [
    RouterModule.forRoot(desktop_routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {
  constructor(
    private router: Router,
    private applicationState: ApplicationStateService
  ) {
    if (applicationState.getIsMobileResolution()) {
      router.resetConfig(mobile_routes);
      console.log(this.router.config);
    }
  }
}
