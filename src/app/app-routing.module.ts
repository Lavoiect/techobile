import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { JoblistComponent } from './joblist/joblist.component';
import { CurrentjobComponent } from './currentjob/currentjob.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'current', component: CurrentjobComponent},
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
