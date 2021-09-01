import {Component} from '@angular/core';
import {Credentials} from '@core/models/credentials.model';
import {AuthService} from '@core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {

  constructor(private authService: AuthService) {
  }

  handleLogin(credentials: Credentials): void {
    console.table(credentials);
    this.authService.login(credentials);
  }


}
