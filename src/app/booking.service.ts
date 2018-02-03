import { UserService } from './user.service';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class BookingService {

  constructor(private http: Http,
    private userService: UserService) { }


  addBooking(x: any) {
    x.scheduledById = this.userService.loggedInUser;
    return this.http.post('http://localhost:5555/api/addBooking', x)
      .map((response: Response) => {
        const status = response.text();
        return status;
      }
      )
      .catch(
      (error: Response) => {
        console.log('catch error');
        return Observable.throw('Something went wrong');
      }
      );
  }


  getBooking(x: any) {
    const requestURL = 'http://localhost:5555/api/bookings/bookingId/' + x;
    return this.http.get(requestURL)
      .map((response: Response) => {

        return response;
      }
      )
      .catch(
      (error: Response) => {
        console.log('catch error');
        return Observable.throw('Something went wrong');
      }
      );
  }


  getAllUserBookings() {
    const requestURL = 'http://localhost:5555/api/bookings/userId/' + this.userService.loggedInUser;
    return this.http.get(requestURL)
      .map((response: Response) => {
        return response;
      }
      )
      .catch(
      (error: Response) => {
        console.log('catch error');
        return Observable.throw('Something went wrong');
      }
      );
  }


}
