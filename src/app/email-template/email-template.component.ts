import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-email-template',
  templateUrl: './email-template.component.html',
  styleUrls: ['./email-template.component.scss']
})
export class EmailTemplateComponent implements OnInit {

  constructor(private _location: Location) { }

  ngOnInit() {
  }
  backClicked() {
    this._location.back();
  }
}
