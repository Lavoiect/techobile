import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  deviceType = 'voice';

  ClockedStatus: string;
  constructor() { }

}
