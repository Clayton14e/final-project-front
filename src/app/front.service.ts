import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FrontService {
  userLoggedIn = false;
  constructor(private router: Router) { }

  onLogin() {
    this.userLoggedIn = true;
    this.router.navigate(['login']);
  }

  onSignup() {
    this.router.navigate(['signup']);
  }
}
