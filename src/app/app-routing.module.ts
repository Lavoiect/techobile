import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { JoblistComponent } from './components/joblist/joblist.component';
import { CurrentjobComponent } from './components/currentjob/currentjob.component';
import { MessagesComponent } from './components/messages/messages.component';
import { FullfilmentMessageComponent } from './components/fullfilment-message/fullfilment-message.component';
import { ComposeMessageComponent } from './components/compose-message/compose-message.component';
import { EmailTemplateComponent } from './components/email-template/email-template.component';
import { EquipmentBufferComponent } from './components/Equipment/equipment-buffer/equipment-buffer.component';
import { EquipmentListComponent } from './components/Equipment/equipment-list/equipment-list.component';
import { DeviceDetailsComponent } from './components/device-details/device-details.component';
import { EtaComponent } from './components/eta/eta.component';
import { PollingComponent } from './components/polling/polling.component';
import { ScanComponent } from './components/Equipment/scan/scan.component';
import { SpeedComponent } from './components/speed/speed.component';
import { JobDetailsComponent } from './components/job-details/job-details.component';
import { PollResultsComponent } from './components/polling/poll-results/poll-results.component';


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
