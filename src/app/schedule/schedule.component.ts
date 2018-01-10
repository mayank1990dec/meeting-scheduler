import { Component, OnInit, ElementRef } from '@angular/core';

@Component({

  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

  templocation = {};


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

  locations = this.building.map(item => item.location);

  constructor() {
    console.log(this.locations);
  }
  onSelect(event) {

  }
  ngOnInit() {
  }


  onSubmit(form: ElementRef) {
    console.log(form);



  }

}
