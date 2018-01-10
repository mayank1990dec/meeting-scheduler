import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userName: string;
  password: string;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('in submit');
    console.log(this.userName);
    console.log(this.password);


  }

}
