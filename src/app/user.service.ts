import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class UserService {
  private headers = new Headers({ 'Content-Type': 'application/json' });
  loggedInUser: any;
  loggedInStatus: boolean = false;

  constructor(private http: Http) { }


  login(username, password): Observable<any> {
    return this.http.post('http://localhost:5555/api/validateUser',
      { 'username': username, 'password': password })
      .map((response: Response) => {
        console.log(response);
        // const status = response.text();
        this.loggedInUser = response.json().id;
        this.loggedInStatus = true;
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

  addUser(x: any) {
    return this.http.post('http://localhost:5555/api/addUser', x)
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

  isAuthenticated() {
    return this.loggedInStatus !== false;
  }



}
