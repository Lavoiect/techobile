import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-polling',
  templateUrl: './polling.component.html',
  styleUrls: ['./polling.component.scss']
})
export class PollingComponent implements OnInit {

  constructor(private router: Router) { }

  pollingTools = true;
  recentDevices = false;
  toggleTools = true;
  toggleDevice: boolean;
  ngOnInit() {
  }

  showPolling() {
    if (this.pollingTools === false) {
      this.pollingTools = true;
      this.recentDevices = false;
      this.toggleTools = true;
      this.toggleDevice = false;
    }
  }
  showRecent() {
    if (this.recentDevices === false) {
      this.recentDevices = true;
      this.pollingTools = false;
      this.toggleTools = false;
      this.toggleDevice = true;
    }
  }

  pollingResults() {
    this.router.navigate(['/pollingResults']);
  }

}
