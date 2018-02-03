import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { IUser } from './user';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {


  user: IUser = new User();

  emailPattern = "^[^\s@]+@[^\s@]+\.[^\s@]{2,}$";

  constructor(private userService: UserService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
  }

  onSubmit(f) {

    console.log('Just before data in db');

    // const navigationExtras: NavigationExtras = {
    //   queryParams: { 'signUpFlag': true }
    // };
    // this.router.navigate(['login'], navigationExtras);


    let status: boolean;
    this.userService.addUser(this.user)
      .subscribe((status) => {
        console.log(status);
        if (status === 'Success') {
          const navigationExtras: NavigationExtras = {
            queryParams: { 'signUpFlag': true }
          };
          this.router.navigate(['login'], navigationExtras);

        }
      },
      error => {
        console.log(error);
      }
      );


  }
}

class User implements IUser {
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