import {Component} from '@angular/core';
import { Router } from '@angular/router';
import { StatsComponent } from './stats.component';

@Component({
  selector: 'app-stats-mobile',
  templateUrl: './stats.component.mobile.html',
  styleUrls: ['./stats.component.mobile.scss']
})
export class StatsComponentMobile extends StatsComponent {

  constructor(router: Router) {
    super(router);
   }

}