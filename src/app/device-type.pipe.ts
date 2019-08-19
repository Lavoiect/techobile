import { Pipe, PipeTransform } from '@angular/core';
import { AuthService } from '../app/auth.service';
import { Device } from '../app/device';
@Pipe({
  name: 'deviceType'
})
export class DeviceTypePipe implements PipeTransform {


  constructor(private auth: AuthService) { }

  transform(items: any[], filter: Device): any {
    if (!items || !filter) {
        return items;
    }
    return items.filter(item => item.type.indexOf(filter.type) !== -1);
}

}
