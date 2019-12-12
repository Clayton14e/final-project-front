import { Component, OnInit } from '@angular/core';
import { FrontService } from '../front.service';
import { Router } from '@angular/router';
import { UserService, RegisterResponse } from '../user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  user = {
    firstName: '',
    lastName: '',
    password: '',
    email: ''
  };

  ngOnInit() {
  }

  signUp() {
    this.userService.registerUser(this.user).subscribe( (res: RegisterResponse) => {
      sessionStorage.setItem('token', res.token);
      sessionStorage.setItem('userId', res.userId);
      this.userService.firstName = res.firstName;
      this.userService.isLoggedIn = true;
      this.goToDash();
    });
  }

  goToDash(){
    this.router.navigate(['/home']);
  }
}
