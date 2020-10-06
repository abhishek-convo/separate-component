import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  groups: any[];
  constructor(private router: Router, private sharedService: SharedService) {}

  ngOnInit(): void {
    this.groups = this.sharedService.getGroupsData();
  }

  grpchildRoute(grp) {
    console.log(this.router.config);
    this.router.navigateByUrl(`/group/${grp.id}`);
  }

  goTo(type) {
    if (type === 'home') {
      this.router.navigateByUrl('/');
    } else {
      this.router.navigateByUrl(`/${type}`);
    }
  }

  settingBtnClicked() {
    this.router.navigateByUrl('/settings');
  }
}
