import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingGridComponent } from './meeting-grid.component';

describe('MeetingGridComponent', () => {
  let component: MeetingGridComponent;
  let fixture: ComponentFixture<MeetingGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetingGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetingGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
