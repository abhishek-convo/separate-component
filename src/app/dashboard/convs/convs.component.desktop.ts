import {Component} from '@angular/core';
import { Router } from '@angular/router';
import { ConvsComponent } from './convs.component';

@Component({
  selector: 'app-convs-desktop',
  templateUrl: './convs.component.desktop.html',
  styleUrls: ['./convs.component.desktop.scss']
})
export class ConvsComponentDesktop extends ConvsComponent {

  constructor(router: Router) {
    super(router);
   }

}