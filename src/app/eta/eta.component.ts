import { Component, OnInit, Input } from '@angular/core';
import {Location} from '@angular/common';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';



@Component({
  selector: 'app-eta',
  templateUrl: './eta.component.html',
  styleUrls: ['./eta.component.scss'],

})
export class EtaComponent implements OnInit {


  constructor(private _location: Location, private atp: NgxMaterialTimepickerModule) { }

  ngOnInit() {
    const [ngxTimepicker] = 'picker';
  }

  backClicked() {
    this._location.back();
  }

}
