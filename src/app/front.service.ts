import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FrontService {
  userLoggedIn = false;
  constructor() { }
}
