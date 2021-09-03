import {Component} from '@angular/core';
import {AuthService} from '@core/services/auth.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.sass']
})
export class SummaryComponent {

  constructor(private authService: AuthService) {
  }

  onClick() {
    console.log(this.authService.isLoggedIn);
    this.authService.currentUser.subscribe(
      next => console.log(next)
    );
  }

}
