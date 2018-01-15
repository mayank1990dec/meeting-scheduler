import { UserService } from './user.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { NavbarModule } from './shared/navbar/navbar.module';
import { FooterModule } from './shared/footer/footer.module';
import { SidebarModule } from './sidebar/sidebar.module';
import { LbdModule } from './lbd/lbd.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { TablesComponent } from './tables/tables.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { MeetingComponent } from './meeting/meeting.component';
import { MeetingDetailComponent } from './meeting/meeting-detail/meeting-detail.component';
import { MeetingGridComponent } from './meeting/meeting-grid/meeting-grid.component';
import { ScheduleComponent } from 'app/schedule/schedule.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthSignUpComponent } from './auth-sign-up/auth-sign-up.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { AfterLogInComponent } from './after-log-in/after-log-in.component';
import { LandingComponent } from './landing/landing.component';
import { Chips, ChipsModule } from 'primeng/primeng';
import { CalendarModule } from 'primeng/primeng';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BookingService } from 'app/booking.service';


@NgModule({
  declarations: [
    ScheduleComponent,
    AppComponent,
    HomeComponent,
    UserComponent,
    TablesComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    MeetingComponent,
    MeetingDetailComponent,
    MeetingGridComponent,
    AuthSignUpComponent,
    SignUpComponent,
    LoginComponent,
    AfterLogInComponent,
    LandingComponent

  ],
  imports: [
    BrowserAnimationsModule,
    CalendarModule,
    ChipsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    NavbarModule,
    FooterModule,
    SidebarModule,
    RouterModule,
    AppRoutingModule,
    LbdModule,
    NgbModule.forRoot()
  ],
  providers: [UserService, BookingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
