import { Component, OnInit } from '@angular/core';
import { FrontService } from '../front.service';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private userService: UserService, private router: Router, public frontService: FrontService) { }

  ngOnInit() {
  }

}
