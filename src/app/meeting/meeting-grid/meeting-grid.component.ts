import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {

    this.tableData1 = {
      headerRow: ['ID', 'Scheduled By', 'Description', 'Start Time', 'Duration'],
      dataRows: [
        ['1', 'Dakota Rice', 'To discuss on Estee Lauder', '19 Jan, 11:00 am', '4 hrs'],
        ['2', 'Minerva Hooper', 'Stratise marketing policy', '19 Jan, 01:00 am', '2 hrs']

      ]
    };
  }

}
