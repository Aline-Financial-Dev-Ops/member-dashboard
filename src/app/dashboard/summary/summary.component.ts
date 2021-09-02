import {Component} from '@angular/core';
import {AuthService} from '@core/services/auth.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.sass']
})
export class SummaryComponent {

  constructor(private authService: AuthService) { }

  onClick() {
    this.authService.getCurrentUser()
      .subscribe(u => console.log(u));
  }

}
