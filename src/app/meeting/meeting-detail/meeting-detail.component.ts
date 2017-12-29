import { Component, OnInit } from '@angular/core';
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
export class MeetingDetailComponent implements OnInit {

  public tableData1: TableData;
  testValue = 'this is a test value';
  values = ['Rahul Dravid', 'Sachin Tendulkar', 'VVS Laxman', 'MS Dhoni'];
  meeting: any;
  constructor() { }

  ngOnInit() {

    this.meeting = {
      agenda: 'To discuss on Estee Lauder',
      location: 'Atlas, B#4 Hyderabad',
      scheduledBy: 'Kevin Spicey',
      time: new Date(),
      duration: '2 hrs',
      invitees: ['Rahul Dravid', 'Sachin Tendulkar', 'VVS Laxman', 'MS Dhoni',
        'Rahul Dravid', 'Sachin Tendulkar', 'VVS Laxman', 'MS Dhoni', 'Rahul Dravid', 'Sachin Tendulkar',
        'VVS Laxman', 'MS Dhoni', 'Rahul Dravid', 'Sachin Tendulkar', 'VVS Laxman', 'MS Dhoni']
    }
  }
}