import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
@Component({
  selector: 'app-eta',
  templateUrl: './eta.component.html',
  styleUrls: ['./eta.component.scss']
})
export class EtaComponent implements OnInit {

  constructor(private _location: Location) { }

  ngOnInit() {
  }

  backClicked() {
    this._location.back();
  }

}
