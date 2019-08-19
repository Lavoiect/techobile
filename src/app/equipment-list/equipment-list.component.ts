import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { Device } from '../device';

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

  device: Device[] = [
    {
      type: 'voice',
      model: 'Motorola',
      deviceId: 'AT4506JK232S',
    },
    {
      type: 'voice',
      model: 'Motorola',
      deviceId: 'AT4506JK232S',
    },
    {
      type: 'HSD',
      model: 'Motorola',
      deviceId: 'AT4506JK232S',
    },
    {
      type: 'video',
      model: 'Motorola',
      deviceId: 'AT4506JK232S',
    },
    {
      type: 'voice',
      model: 'Motorola',
      deviceId: 'AT4506JK232S',
    },
  ];

  showList = false;


  constructor(private _location: Location) { }

  showAll: boolean;

  ngOnInit() {
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

}

