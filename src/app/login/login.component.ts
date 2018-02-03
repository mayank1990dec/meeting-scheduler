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


  onSubmit() {
    this.userService.login(this.userName, this.password)
      .subscribe(response => {
        if (response.status === 200) {
          this.router.navigate(['landing']);
        }
      },
      error => {
        console.log(error);
      }
      );


  }

}
