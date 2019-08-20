import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetDataService } from '../get-data.service';
import {Location} from '@angular/common';
import { Device } from '../device';


@Component({
  selector: 'app-device-details',
  templateUrl: './device-details.component.html',
  styleUrls: ['./device-details.component.scss']
})
export class DeviceDetailsComponent implements OnInit {

  device:  any = {};

  constructor(private route: ActivatedRoute, private apiService: GetDataService, private _location: Location) {
    this.route.params.subscribe( params => this.device = params.id);
  }

  ngOnInit() {
    this.apiService.getDevice(this.device).subscribe((device: Device[]) => {
      this.device = device;
    });
  }
  backClicked() {
    // @todo us router to go to equipment route
     this._location.back();
   }

}
