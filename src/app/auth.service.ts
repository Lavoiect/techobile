import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  ClockedIn: boolean;
  ClockedStatus: string;
  constructor() { }

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
