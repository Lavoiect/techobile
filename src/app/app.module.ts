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
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import { JoblistComponent } from './components/joblist/joblist.component';
import { CurrentjobComponent } from './components/currentjob/currentjob.component';
import { MessagesComponent } from './components/messages/messages.component';
import { FullfilmentMessageComponent } from './components/fullfilment-message/fullfilment-message.component';
import { ComposeMessageComponent } from './components/compose-message/compose-message.component';
import { EmailTemplateComponent } from './components/email-template/email-template.component';
import { EquipmentBufferComponent } from './components/Equipment/equipment-buffer/equipment-buffer.component';
import { EquipmentListComponent } from './components/Equipment/equipment-list/equipment-list.component';
import { DeviceTypePipe } from './device-type.pipe';
import { DeviceDetailsComponent } from './components/device-details/device-details.component';
import { HttpClientModule } from '@angular/common/http';
import { EtaComponent } from './components/eta/eta.component';
import { PollingComponent } from './components/polling/polling.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { ScanComponent } from './components/Equipment/scan/scan.component';
import { AlertComponent } from './components/alert/alert.component';
import { SpeedComponent } from './components/speed/speed.component';
import { JobDetailsComponent } from './components/job-details/job-details.component';
import { PollResultsComponent } from './components/polling/poll-results/poll-results.component';



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
    PollResultsComponent,


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
