import {Component} from '@angular/core';
import {Credentials} from '@core/models/credentials.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {

  handleLogin(credentials: Credentials): void {
    console.table(credentials);
  }


}
