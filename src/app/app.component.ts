import { Component } from '@angular/core';
import { FrontService} from './front.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public frontService: FrontService) { }
  title = 'final-project-front';
  userLogged = this.frontService.userLoggedIn;
}
