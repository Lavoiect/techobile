import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { JoblistComponent } from './joblist/joblist.component';
import { CurrentjobComponent } from './currentjob/currentjob.component';
import { MessagesComponent } from './messages/messages.component';
import { FullfilmentMessageComponent } from './fullfilment-message/fullfilment-message.component';
import { ComposeMessageComponent } from './compose-message/compose-message.component';
import { EmailTemplateComponent } from './email-template/email-template.component';
import { EquipmentBufferComponent } from './Equipment/equipment-buffer/equipment-buffer.component';
import { EquipmentListComponent } from './Equipment/equipment-list/equipment-list.component';
import { DeviceDetailsComponent } from './device-details/device-details.component';
import { EtaComponent } from './eta/eta.component';
import { PollingComponent } from './polling/polling.component';
import { ScanComponent } from './Equipment/scan/scan.component';
import { SpeedComponent } from './speed/speed.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { PollResultsComponent } from './polling/poll-results/poll-results.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'current', component: CurrentjobComponent},
  {path: 'messages', component: MessagesComponent},
  {path: 'messages', component: MessagesComponent},
  {path: 'polling', component: PollingComponent},
  {path: 'pollingResults', component: PollResultsComponent},
  {path: 'speed', component: SpeedComponent},
  {path: 'eta', component: EtaComponent},
  {path: 'fulfillementMessage', component: FullfilmentMessageComponent},
  {path: 'compose', component: ComposeMessageComponent},
  {path: 'readEmail', component: EmailTemplateComponent},
  {path: 'equipment', component: EquipmentBufferComponent},
  {path: 'equipmentList', component: EquipmentListComponent},
  {path: 'scan', component: ScanComponent},
  {path: 'deviceDetails/:id', component: DeviceDetailsComponent},
  {path: 'home', component: HomeComponent,
    children: [
      { path: 'joblist', component: JoblistComponent},
    ]
},
  { path: 'jobDetails', component: JobDetailsComponent},
  { path: '', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
