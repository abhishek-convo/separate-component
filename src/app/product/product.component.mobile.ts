import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductComponent } from './product.component';

@Component({
  selector: 'app-product-mobile',
  templateUrl: './product.component.mobile.html',
  styleUrls: ['./product.component.mobile.scss'],
})
export class ProductComponentMobile extends ProductComponent {
  constructor(router: Router, route: ActivatedRoute) {
    super(router, route);
  }
}
