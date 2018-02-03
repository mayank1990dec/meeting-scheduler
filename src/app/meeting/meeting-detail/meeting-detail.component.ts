import { BookingService } from 'app/booking.service';
import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ChipsModule } from 'primeng/primeng';

declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}

@Component({
  selector: 'app-meeting-detail',
  templateUrl: './meeting-detail.component.html',
  styleUrls: ['./meeting-detail.component.scss']
})
export class MeetingDetailComponent implements OnInit, OnChanges {

  @Input() meetingId: string;
  public tableData1: TableData;
  testValue = 'this is a test value';
  values = ['Rahul Dravid', 'Sachin Tendulkar', 'VVS Laxman', 'MS Dhoni'];
  meeting: any = [];
  constructor(private bookingService: BookingService) { }


  ngOnChanges() {
    console.log('In meeting detial component');
    console.log(this.meetingId);
    this.bookingService.getBooking(this.meetingId)
      .subscribe((response) => {
        console.log(response);
        this.meeting = response.json();
        console.log(this.meeting);

      },
      error => {
        console.log(error);
      }
      );

  }

  ngOnInit() {
    this.meeting.invitees = [];
  }
}