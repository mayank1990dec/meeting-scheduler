import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.scss']
})
export class MeetingComponent implements OnInit {

  meetingId: string;
  constructor() { }

  ngOnInit() { }

  onMeetingIdEvent(meetingId: string) {
    console.log(meetingId);
    this.meetingId = meetingId;
  }
}
