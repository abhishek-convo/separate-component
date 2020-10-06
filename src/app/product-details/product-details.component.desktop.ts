import {Component} from '@angular/core';
import { Router } from '@angular/router';
import { ProductDetailsComponent } from './product-details.component';

@Component({
  selector: 'app-product-desktop',
  templateUrl: './product-details.component.desktop.html',
  styleUrls: ['./product-details.component.desktop.scss']
})
export class ProductDetailsComponentDesktop extends ProductDetailsComponent {

  constructor(router: Router) {
    super(router);
   }

}