import { Router } from '@angular/router';
import { StatsComponentModel } from './stats.component.model';

export abstract class StatsComponent {


  private model: StatsComponentModel;
  public myViewModel: StatsComponentModel;

  constructor(private router: Router) {
    this.model = new StatsComponentModel();
    this.myViewModel = new StatsComponentModel();

    this.updateView();
  }

  updateView(){
    this.myViewModel = this.model;
  }
}