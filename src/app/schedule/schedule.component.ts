import { BookingService } from './../booking.service';
import { IMeeting } from './meeting';
import { Component, OnInit, ElementRef, ViewEncapsulation } from '@angular/core';

@Component({

  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
})
export class ScheduleComponent implements OnInit {


  date: any = Date.now;
  time: any = '00:00';
  hr: any = 'hrs';
  hrs: any = ['hrs', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13'];

  meeting: IMeeting = new Meeting();

  tempLocation: any = 'Select City';
  locations: any = ['Select City', 'Hyderabd', 'Bangalore'];

  tempBuilding: any = 'Select Buiding';
  buildings: any = ['Select Buiding', 'B4', 'B7'];


  tempRoom: any = 'Select Room';
  rooms: any = ['Select Room', 'Ajjoba', 'Bahura'];


  invitees: any = ['mayank', 'shubham'];

  building = [{
    location: 'Hyderabad',
    // building: ['B9', 'B10', 'B4'],
    building: [{
      name: 'B9',
      roomName: ['Ganga', 'Yamuna', 'Saraswati', 'Godavari']
    },
    {
      name: 'B10',
      roomName: ['Himalaya', 'Alps']
    },
    {
      name: 'B4',
      roomName: ['Earth', 'Venus', 'Pluto', 'Mars']
    }]
  },
  {
    location: 'Bangalore',
    // building: ['B9', 'B10', 'B4'],
    building: [{
      name: 'B9',
      roomName: ['BGanga', 'BYamuna', 'Saraswati', 'Godavari']
    },
    {
      name: 'B10',
      roomName: ['Himalaya', 'Alps']
    },
    {
      name: 'B4',
      roomName: ['Earth', 'Venus', 'Pluto', 'Mars']
    }]
  }];

  // locations = this.building.map(item => item.location);

  constructor(private bookingService: BookingService) {
    console.log(this.locations);
  }
  onSelect(event) {

  }
  ngOnInit() {
  }

  debug() {
    console.log('show loaction');
    console.log(this.time);
  }

  onSubmit(form: ElementRef) {
    console.log(this.meeting);
    this.bookingService.addBooking(this.meeting)
      .subscribe((status) => {
        console.log(status);

      },
      error => {
        console.log(error);
      }
      );
  }

}


class Meeting implements IMeeting {
  constructor(
    public scheduledById?,
    public location?,
    public building?,
    public room?,
    public date?,
    public time?,
    public duration?,
    public agenda?,
    public invitees?,
    public description?) { }
}