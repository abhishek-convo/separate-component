import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductComponent } from './product.component';

@Component({
  selector: 'app-product-desktop',
  templateUrl: './product.component.desktop.html',
  styleUrls: ['./product.component.desktop.scss'],
})
export class ProductComponentDesktop extends ProductComponent {
  constructor(router: Router, route: ActivatedRoute) {
    super(router, route);
    this.myViewModel.name = 'stats';
    this.myViewModel.description = 'this is Stats Page';
  }

  changeTitle(type) {
    switch (type) {
      case 'stats':
        this.myViewModel.name = 'stats';
        this.myViewModel.description = 'this is Stats Page';
        break;
      case 'convs':
        this.myViewModel.name = 'convs';
        this.myViewModel.description = 'this is convs Page';
        break;
      case 'analytics':
        this.myViewModel.name = 'analytics';
        this.myViewModel.description = 'this is analytics Page';
        break;
      default:
        this.myViewModel.name = 'stats';
        this.myViewModel.description = 'this is Stats Page';
        break;
    }
  }
}
