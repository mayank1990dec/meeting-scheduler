import { element } from 'protractor';
import { BookingService } from 'app/booking.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}


@Component({
  selector: 'app-meeting-grid',
  templateUrl: './meeting-grid.component.html',
  styleUrls: ['./meeting-grid.component.scss']
})
export class MeetingGridComponent implements OnInit {
  public tableData1: TableData;
  public tableData2: TableData;
  dataRows = [];
  @Output() onMeetingIdEvent = new EventEmitter<string>();

  constructor(private bookingService: BookingService) { }

  ngOnInit() {
    this.bookingService.getAllUserBookings()
      .subscribe((response) => {
        console.log(response);
        const jsonResponse = response.json();

        for (let i = 0; i < jsonResponse.length; i++) {
          this.tableData1.dataRows[i][0] = (i + 1).toString();
          this.tableData1.dataRows[i][1] = jsonResponse[i].scheduledById;
          this.tableData1.dataRows[i][2] = jsonResponse[i].description;
          this.tableData1.dataRows[i][3] = jsonResponse[i].date;
          this.tableData1.dataRows[i][4] = jsonResponse[i].duration;
          this.tableData1.dataRows[i][5] = jsonResponse[i]._id;
        }
        console.log(this.tableData1);
      },
      error => {
        console.log(error);
      }
      );

    this.tableData1 = {
      headerRow: ['ID', 'Scheduled By', 'Description', 'Start Time', 'Duration'],
      dataRows: [
        ['1', 'Dakota Rice', 'To discuss on Estee Lauder', '19 Jan, 11:00 am', '4 hrs'],
        ['2', 'Minerva Hooper', 'Stratise marketing policy', '19 Jan, 01:00 am', '2 hrs']

      ]
    };
  }

  onRowSelect(row) {
    this.onMeetingIdEvent.emit(row[5]);
  }
}


