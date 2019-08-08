import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-joblist',
  templateUrl: './joblist.component.html',
  styleUrls: ['./joblist.component.scss']
})
export class JoblistComponent implements OnInit {
  @ViewChild('sidenav', {static: false}) sidenav: MatSidenav;

  ClockedStatus: string;
  status = new FormControl('');
  ClockedIn: boolean;


  shouldRun = (h => h.test(window.location.host));

  ngOnInit() {
    this.ClockedStatus = 'Clocked Out';
    this.ClockedIn = false;
  }
  public close(reason: string) {
    this.sidenav.close();
  }
  changeStatus() {
    if (this.ClockedIn === false) {
      console.log('logged in');
      this.ClockedStatus = 'Clocked In';
      this.ClockedIn = true;
    } else {
      this.ClockedStatus = 'Clocked Out';
      this.ClockedIn = false;
    }

  }

}
