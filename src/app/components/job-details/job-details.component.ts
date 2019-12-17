import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.scss']
})
export class JobDetailsComponent implements OnInit {
  jobDetails = true;
  equipSummary = false;
  toggleDetails = true;
  toggleEquipment: boolean;
  onJob = false;

  jobNumber = 1127345;

  constructor() { }

  ngOnInit() {
  }

  showDetails() {
    if (this.jobDetails === false) {
      this.jobDetails = true;
      this.equipSummary = false;
      this.toggleDetails = true;
      this.toggleEquipment = false;
    }
  }
  showEquipment() {
    if (this.equipSummary === false) {
      this.equipSummary = true;
      this.jobDetails = false;
      this.toggleEquipment = true;
      this.toggleDetails = false;
    }
  }

  goOnJob() {
    this.onJob = !this.onJob;
  }

}
