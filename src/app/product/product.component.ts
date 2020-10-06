import { ActivatedRoute, Router } from '@angular/router';
import { ProductComponentModel } from './product.component.model';

export abstract class ProductComponent {
  private model: ProductComponentModel;
  public myViewModel: ProductComponentModel;

  constructor(public router: Router, private route: ActivatedRoute) {
    this.model = new ProductComponentModel();
    this.myViewModel = new ProductComponentModel();
    this.getSelectedGroupName();
  }

  getSelectedGroupName() {
    this.route.params.subscribe((param) => {
      if (param && param.id) {
        this.model.grpName = param.id;
      }
      this.updateView();
    });
  }

  updateView() {
    this.myViewModel = this.model;
  }

  toHomePage() {
    this.router.navigateByUrl('/');
  }

  goTo(type) {
    this.router.navigateByUrl(`/${type}`);
  }
}
