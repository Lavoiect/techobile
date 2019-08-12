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

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'current', component: CurrentjobComponent},
  {path: 'messages', component: MessagesComponent},
  {path: 'messages', component: MessagesComponent},
  {path: 'fulfillementMessage', component: FullfilmentMessageComponent},
  {path: 'compose', component: ComposeMessageComponent},
  {path: 'readEmail', component: EmailTemplateComponent},
  {path: 'home', component: HomeComponent,
    children: [
      { path: 'joblist', component: JoblistComponent}
    ]
},
  { path: '', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
