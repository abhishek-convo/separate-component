import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductDetailsComponentMobile } from './product-details/product-details.component.mobile';
import { ProductDetailsComponentDesktop } from './product-details/product-details.component.desktop';
import { SharedModule } from './shared/shared.module';
import { ProductComponentMobile } from './product/product.component.mobile';
import { ProductComponentDesktop } from './product/product.component.desktop';

@NgModule({
  declarations: [
    AppComponent,
    ProductDetailsComponentMobile,
    ProductDetailsComponentDesktop,
    ProductComponentMobile,
    ProductComponentDesktop
  ],
  imports: [BrowserModule, AppRoutingModule, SharedModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
