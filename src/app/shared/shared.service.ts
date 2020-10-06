import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  groupsData = [
    { id: 'abc-123', name: 'Abc-123', type: 'Facebook' },
    { id: 'abc-345', name: 'Abc-345', type: 'Facebook' },
    { id: 'abc-678', name: 'Abc-678', type: 'Whatsapp' },
    { id: 'def-123', name: 'Def-123', type: 'Facebook' },
    { id: 'def-345', name: 'Def-345', type: 'Facebook' },
    { id: 'def-678', name: 'Def-678', type: 'Whatsapp' },
    { id: 'ghi-123', name: 'Ghi-123', type: 'Facebook' },
    { id: 'ghi-345', name: 'Ghi-345', type: 'Facebook' },
    { id: 'ghi-678', name: 'Ghi-678', type: 'Whatsapp' },
  ];
  constructor() {}

  getGroupsData() {
    return this.groupsData;
  }

  getGroupsById(id) {
    return this.groupsData.filter((grp) => grp.id === id);
  }

  getGroupsDataOnlyId() {
    return this.groupsData.map((grp) => {
      return { id: grp.id };
    });
  }
}
