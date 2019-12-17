import { Component, OnInit, Input } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {

  @Input() name: string;

  constructor(private _location: Location) { }

  value: string;

  ngOnInit() {
  }
  backClicked() {
    this._location.back();
  }
}
