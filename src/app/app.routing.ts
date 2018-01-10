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

const routes: Routes = [
  {
    path: 'meeting', component: MeetingComponent,
    children: [
      {
        path: 'meetingGrid', component: MeetingGridComponent,
        children: [
          { path: 'meetingDetail', component: MeetingDetailComponent }
        ]
      }
    ]
  },
  { path: 'dashboard', component: HomeComponent },
  { path: 'user', component: UserComponent },
  { path: 'table', component: TablesComponent },
  { path: 'typography', component: TypographyComponent },
  { path: 'icons', component: IconsComponent },
  { path: 'maps', component: MapsComponent },
  { path: 'notifications', component: NotificationsComponent },
  { path: 'upgrade', component: UpgradeComponent },
  { path: 'schedule', component: ScheduleComponent },

  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
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
