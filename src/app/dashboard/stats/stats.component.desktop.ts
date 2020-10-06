import {Component} from '@angular/core';
import { Router } from '@angular/router';
import { StatsComponent } from './stats.component';

@Component({
  selector: 'app-stats-desktop',
  templateUrl: './stats.component.desktop.html',
  styleUrls: ['./stats.component.desktop.scss']
})
export class StatsComponentDesktop extends StatsComponent {

  constructor(router: Router) {
    super(router);
   }

}