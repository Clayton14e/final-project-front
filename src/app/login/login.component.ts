import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FrontService} from '../front.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, public frontService: FrontService) { }
  // User Object
  user = {
    username: '',
    password: '',
    email: ''
  };

  ngOnInit() {
  }

  onLogin() {
    this.frontService.userLoggedIn = true;
    this.router.navigate(['home']);
  }

}
