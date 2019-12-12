import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FrontService} from '../front.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, public frontService: FrontService) { }
  // User Object


  ngOnInit() {
  }


}
