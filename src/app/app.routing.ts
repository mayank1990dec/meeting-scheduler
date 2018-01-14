import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { TablesComponent } from './tables/tables.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { MeetingComponent } from 'app/meeting/meeting.component';
import { MeetingDetailComponent } from 'app/meeting/meeting-detail/meeting-detail.component';
import { MeetingGridComponent } from 'app/meeting/meeting-grid/meeting-grid.component';
import { ScheduleComponent } from 'app/schedule/schedule.component';
import { LandingComponent } from 'app/landing/landing.component';

const routes: Routes = [


  { path: 'logIn', component: LoginComponent },
  { path: 'signUp', component: SignUpComponent },
  {
    path: 'landing', component: LandingComponent,
    children: [
      { path: 'user', component: UserComponent, outlet: 'landing' },
      { path: 'dashboard', component: HomeComponent, outlet: 'landing' },
      { path: 'table', component: TablesComponent, outlet: 'landing' },
      { path: 'typography', component: TypographyComponent, outlet: 'landing' },
      { path: 'icons', component: IconsComponent, outlet: 'landing' },
      { path: 'maps', component: MapsComponent, outlet: 'landing' },
      { path: 'notifications', component: NotificationsComponent, outlet: 'landing' },
      { path: 'upgrade', component: UpgradeComponent, outlet: 'landing' },
      { path: 'schedule', component: ScheduleComponent, outlet: 'landing' },
      {
        path: 'meeting', component: MeetingComponent, outlet: 'landing',
        children: [
          {
            path: 'meetingGrid', component: MeetingGridComponent,
            children: [
              { path: 'meetingDetail', component: MeetingDetailComponent }
            ]
          }
        ]
      }


    ]
  },







  { path: '', redirectTo: '/landing', pathMatch: 'full' }



];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
