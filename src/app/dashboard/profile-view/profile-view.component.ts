import { Component, OnInit } from '@angular/core';
import {AuthService} from '@core/services/auth.service';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.sass']
})
export class ProfileViewComponent implements OnInit {

  fullName?: string;
  username?: string;
  membershipId?: string;
  loading = false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.loading = true;
    this.authService.currentUser.subscribe(
      user => {
        if (user) {
          this.fullName = `${user.firstName} ${user.lastName}`;
          this.username = user.username;
          this.membershipId = user.membershipId;
          this.loading = false;
        }
      }
    );
  }

}
