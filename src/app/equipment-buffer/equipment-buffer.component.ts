import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-equipment-buffer',
  templateUrl: './equipment-buffer.component.html',
  styleUrls: ['./equipment-buffer.component.scss']
})
export class EquipmentBufferComponent implements OnInit {

  constructor(private _location: Location) { }

  ngOnInit() {
  }

  backClicked() {
    this._location.back();
  }

}
