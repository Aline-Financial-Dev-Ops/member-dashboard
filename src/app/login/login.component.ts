import {Component} from '@angular/core';
import {Credentials} from '@core/models/credentials.model';
import {AuthService} from '@core/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {

  constructor(private authService: AuthService, private router: Router) {
  }

  handleLogin(credentials: Credentials): void {
    console.table(credentials);
    this.authService.login(credentials, () => {
      this.router.navigate(['dashboard'])
        .catch(err => console.error(err));
    });
  }


}
