import {Component} from '@angular/core';
import { Router } from '@angular/router';
import { ProductDetailsComponent } from './product-details.component';

@Component({
  selector: 'app-product-details-mobile',
  templateUrl: './product-details.component.mobile.html',
  styleUrls: ['./product-details.component.mobile.scss']
})
export class ProductDetailsComponentMobile extends ProductDetailsComponent {

  constructor(router: Router) {
    super(router);
   }

}