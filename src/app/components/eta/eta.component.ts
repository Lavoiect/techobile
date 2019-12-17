import { Component, Directive, OnInit, AfterViewInit, ElementRef, ViewChild  } from '@angular/core';
import {Location} from '@angular/common';




@Component({
  selector: 'app-eta',
  templateUrl: './eta.component.html',
  styleUrls: ['./eta.component.scss'],

})
export class EtaComponent implements OnInit, AfterViewInit {
  @ViewChild('picker', {static: true}) picker: ElementRef;


  constructor(private _location: Location) { }



  ngOnInit() {
    setTimeout(() => {
      this.picker.nativeElement.click();
    });

  }

  ngAfterViewInit() {
    console.log('Values on ngAfterViewInit():');
    console.log('picker', this.picker.nativeElement);

  }

  backClicked() {
    this._location.back();
  }

}
