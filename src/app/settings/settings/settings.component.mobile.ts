import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared/shared.service';
import { SettingsComponent } from './settings.component';

@Component({
  selector: 'app-settings-mobile',
  templateUrl: './settings.component.mobile.html',
  styleUrls: ['./settings.component.mobile.scss'],
})
export class SettingsComponentMobile extends SettingsComponent {
  groups: any[];
  tiles: any[] = [
    { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
    { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
    { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
    { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
    { text: 'Five', cols: 3, rows: 1, color: 'lightblue' },
    { text: 'Six', cols: 1, rows: 2, color: 'lightgreen' },
    { text: 'Seven', cols: 1, rows: 1, color: 'lightpink' },
    { text: 'Eight', cols: 2, rows: 1, color: '#DDBDF1' },
    { text: 'Nine', cols: 4, rows: 2, color: '#DDBDF1' },
  ];
  constructor(router: Router, private sharedService: SharedService) {
    super(router);
    this.groups = sharedService.getGroupsData();
  }

  selectionChanged(grp) {
    this.router.navigateByUrl(`/group/${grp.id}`);
  }
}
