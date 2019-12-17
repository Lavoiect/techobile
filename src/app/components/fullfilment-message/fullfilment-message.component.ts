import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fullfilment-message',
  templateUrl: './fullfilment-message.component.html',
  styleUrls: ['./fullfilment-message.component.scss']
})
export class FullfilmentMessageComponent implements OnInit {

  constructor(private _location: Location, private router: Router) { }

  ngOnInit() {
  }
  backClicked() {
    this._location.back();
  }
  composeMessage() {
    this.router.navigate(['/compose']);
    console.log('compose message');
  }
}
