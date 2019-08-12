import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';



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
    EmailTemplateComponent
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
    NgbModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }