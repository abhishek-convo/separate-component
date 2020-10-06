import { Router } from '@angular/router';
import { ProductDetailsComponentModel } from './product-details.component.model';

export abstract class ProductDetailsComponent {

  private model: ProductDetailsComponentModel;
  public myViewModel: ProductDetailsComponentModel;

  constructor(private router: Router) {
    this.model = new ProductDetailsComponentModel();
    this.myViewModel = new ProductDetailsComponentModel();

    this.updateView();
  }

  updateView(){
    this.myViewModel = this.model;
  }
}
