import { Component, OnInit } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {


  user: User = new UserSignUp();

  temp: any;

  constructor() { }


  ngOnInit() {
  }

  onSubmit(f) {
    console.log('In sign up submit');
    console.log(this.user);
    // console.log(this.temp);


  }

}

class UserSignUp implements User {
  constructor(
    public id?,
    public userName?,
    public email?,
    public password?,
    public firstName?,
    public lastName?,
    public location?,
    public building?,
    public role?,
    public project?,
    public address?,
    public city?,
    public postalCode?) { }
}