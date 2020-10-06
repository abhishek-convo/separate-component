import {Component} from '@angular/core';
import { Router } from '@angular/router';
import { ConvsComponent } from './convs.component';

@Component({
  selector: 'app-convs-mobile',
  templateUrl: './convs.component.mobile.html',
  styleUrls: ['./convs.component.mobile.scss']
})
export class ConvsComponentMobile extends ConvsComponent {

  constructor(router: Router) {
    super(router);
   }

}