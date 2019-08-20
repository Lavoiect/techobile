import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { Device } from '../device';
import { GetDataService } from '../get-data.service';

@Component({
  selector: 'app-equipment-list',
  templateUrl: './equipment-list.component.html',
  styleUrls: ['./equipment-list.component.scss']
})
export class EquipmentListComponent implements OnInit {
result: any;

showVoice: boolean;
filterargs = {type: 'voice'};
showFiltered = false;
devices:  Device[] = [];

showList = false;


  constructor(private _location: Location, private apiService: GetDataService) { }

  showAll: boolean;

  ngOnInit() {
    this.fetchDevices();
    this.showAll = true;
  }
  backClicked() {
   // @todo us router to go to equipment route
    this._location.back();
  }

  showEquipment(deviceType) {
    if (deviceType === 'all') {
      this.showAll = true;
      this.showFiltered = false;
        console.log(this.showAll);
    } else {
      this.filterargs = {type: deviceType};
      this.showAll = false;
      this.showFiltered = true;
      console.log('show filtered');
    }
  }

  fetchDevices() {
    this.apiService.getDevices().subscribe((devices: Device[]) => {
      this.devices = devices;
    });
  }

  addTypeClass() {
    if (this.devices) {

    }
  }

}

