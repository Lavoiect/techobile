import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule,
        MatDialogModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule,
      } from '@angular/material';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { AmazingTimePickerModule } from 'amazing-time-picker';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import { JoblistComponent } from './joblist/joblist.component';
import { CurrentjobComponent } from './currentjob/currentjob.component';
import { MessagesComponent } from './messages/messages.component';
import { FullfilmentMessageComponent } from './fullfilment-message/fullfilment-message.component';
import { ComposeMessageComponent } from './compose-message/compose-message.component';
import { EmailTemplateComponent } from './email-template/email-template.component';
import { EquipmentBufferComponent } from './Equipment/equipment-buffer/equipment-buffer.component';
import { EquipmentListComponent } from './Equipment/equipment-list/equipment-list.component';
import { DeviceTypePipe } from './device-type.pipe';
import { DeviceDetailsComponent } from './device-details/device-details.component';
import { HttpClientModule } from '@angular/common/http';
import { EtaComponent } from './eta/eta.component';
import { PollingComponent } from './polling/polling.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { ScanComponent } from './Equipment/scan/scan.component';
import { AlertComponent } from './alert/alert.component';
import { SpeedComponent } from './speed/speed.component';
import { JobDetailsComponent } from './job-details/job-details.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    JoblistComponent,
    CurrentjobComponent,
    MessagesComponent,
    FullfilmentMessageComponent,
    ComposeMessageComponent,
    EmailTemplateComponent,
    EquipmentBufferComponent,
    EquipmentListComponent,
    DeviceTypePipe,
    DeviceDetailsComponent,
    EtaComponent,
    PollingComponent,
    TopNavComponent,
    ScanComponent,
    AlertComponent,
    SpeedComponent,
    JobDetailsComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    NgbModule,
    HttpClientModule,
    MatCardModule,
    NgxMaterialTimepickerModule,
    AmazingTimePickerModule


  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AlertComponent]
})
export class AppModule { }
