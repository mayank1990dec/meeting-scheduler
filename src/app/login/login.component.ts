import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userName: string;
  password: string;

  constructor(private userService: UserService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
  }

  // onSubmit() {
  //   console.log('in submit');
  //   console.log(this.userName);
  //   console.log(this.password);


  // }

  onSubmit() {
    console.log('In sign in');

    //   console.log(this.userName);
    //   console.log(this.password);

    this.userService.login(this.userName, this.password)
      .subscribe(response => {
        console.log(response);
        console.log(response.id);


        if (response.status === 200) {
          // this.userService.
          // const temp = response._body.toString();
          // this.router.navigate(['todo', response.json().id]);
        }
      },
      error => {
        console.log(error);
      }
      );
    // this.authFlag.emit(true);


  }

}
