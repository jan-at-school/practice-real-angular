
/*
* This file decides the navigation of the app.
*/



import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent }   from './signin/signin.component';
import { SignupComponent }   from './signup/signup.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { BrowseComponent }   from './browse/browse.component';
import { ProfileComponent }  from './profile/profile.component';
import { TaskDetailsComponent }  from './task-details/task-details.component';
import { TaskSolutionDetailsComponent }  from './task-solution-details/task-solution-details.component';
import { AttachmentComponent }  from './attachment/attachment.component';
import { TaskAddComponent }  from './task-add/task-add.component';
import { TaskSubmitComponent }  from './task-submit/task-submit.component';
import { AboutComponent }  from './about/about.component';
import { SupportComponent }  from './support/support.component';

const routes: Routes = [
  { path: '', redirectTo: '/explore', pathMatch: 'full' },
  { path: 'explore', component: DashboardComponent },
  { path: 'explore/:tag', component: DashboardComponent },
  { path: 'browse', component: BrowseComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'profile/:id', component:  ProfileComponent},
  { path: 'task/:id', component:  TaskDetailsComponent},
  { path: 'solution/:id', component:  TaskSolutionDetailsComponent},
  { path: 'attachment/:id', component:  AttachmentComponent},
  { path: 'task-new', component:  TaskAddComponent},
  { path: 'task-submit/:id', component:  TaskSubmitComponent},
  { path: 'about', component:  AboutComponent},
  { path: 'support', component:  SupportComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
