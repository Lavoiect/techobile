import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog, MatSidenav} from '@angular/material';
import { AlertComponent } from '../alert/alert.component';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';

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

  constructor(private router: Router, public dialog: MatDialog) { }

  shouldRun = (h => h.test(window.location.host));
  loggedIn = false;

  ngOnInit() {
    if (localStorage.getItem(this.clockedIn) == null) {
      this.clockedIn = 'Clocked Out';
    } else {
      this.clockedIn = localStorage.getItem(this.clockedIn);
    }
    console.log(this.clockedIn);
  }
  checkStatus() {
    if (this.clockedIn === 'Clocked Out') {
      this.openDialog();
      console.log('Please Log in');
    } else {
      this.sidenav.open();
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AlertComponent, {panelClass: 'myapp-no-padding-dialog'});

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'true') {
        this.changeStatus();
      }
    });
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

  jobCardDetails() {
    if (this.clockedIn === 'Clocked In') {
      this.router.navigate([`/jobDetails`]);
    }
  }

  navigateTo( ) {
    this.router.navigate([`/eta`]);
  }
  navigateBack( ) {
    this.router.navigate([`/home/joblist`]);
  }
}
