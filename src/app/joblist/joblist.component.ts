import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-joblist',
  templateUrl: './joblist.component.html',
  styleUrls: ['./joblist.component.scss']
})
export class JoblistComponent implements OnInit {

  jobCard = [
    {
      jobStatus: 'active',
      customer: 'Micheal Haun',
      time: '8:00 - 10:00 Am',
      serviceType: 'Add New Service',
      jobNumber: 2899042,
      Address: '123 Main Ave. St. Louis, MO, 43256'
    },
    {
      jobStatus: 'next',
      customer: 'John Smith',
      time: '10:00 - 12:00 Am',
      serviceType: 'Add New Service',
      jobNumber: 2239023,
      Address: '789 Main Ave. St. Louis, MO, 43256'
    },
    {
      jobStatus: 'future',
      customer: 'John Doe',
      time: '1:00 - 2:00 Am',
      serviceType: 'Re-arrange order',
      jobNumber: 2239023,
      Address: '789 Main Ave. St. Louis, MO, 43256'
    },
  ];

  firstJob = this.jobCard.shift();

  @ViewChild('sidenav', {static: false}) sidenav: MatSidenav;


  clockedIn = 'Clocked Out';
  status: string;
  showfirstJobDetails = false;
  showDetailsButton = true;

  constructor(private router: Router) { }

  shouldRun = (h => h.test(window.location.host));

  ngOnInit() {
    if (localStorage.getItem(this.clockedIn) == null) {
      this.clockedIn = 'Clocked Out';
    } else {
      this.clockedIn = localStorage.getItem(this.clockedIn);
    }
    console.log(this.clockedIn);
  }
  public close(reason: string) {
    this.sidenav.close();
  }
  changeStatus() {
    if (this.clockedIn === 'Clocked Out') {
      console.log('logged in');
      localStorage.setItem(this.clockedIn, 'Clocked In');
      this.clockedIn = localStorage.getItem(this.clockedIn);

    } else {
      localStorage.clear();
      location.reload();
    }

  }

  showDetails() {
    this.showfirstJobDetails = true;
    this.showDetailsButton = false;
  }

}
