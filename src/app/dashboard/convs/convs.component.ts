import { Router } from '@angular/router';
import { ConvsComponentModel } from './convs.component.model';

export abstract class ConvsComponent {


  private model: ConvsComponentModel;
  public myViewModel: ConvsComponentModel;

  constructor(private router: Router) {
    this.model = new ConvsComponentModel();
    this.myViewModel = new ConvsComponentModel();

    this.updateView();
  }

  updateView(){
    this.myViewModel = this.model;
  }
}