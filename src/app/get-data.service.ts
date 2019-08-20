import { Injectable } from '@angular/core';
import { Device } from './device';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(private httpClient: HttpClient) { }


  getDevices(): Observable<Device[]> {
    return this.httpClient.get<Device[]>('http://localhost:3004/device');
  }
  getDevice(deviceId): Observable<Device[]> {
    return this.httpClient.get<Device[]>('http://localhost:3004/device/' + deviceId);
  }
}
