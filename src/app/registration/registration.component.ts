import {AfterViewInit, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.sass']
})
export class RegistrationComponent implements OnInit, AfterViewInit {

  visited = false;

  ngOnInit(): void {
    this.visited = (localStorage.getItem('visited') === 'true');
  }

  ngAfterViewInit() {
    if (!this.visited) {
      localStorage.setItem('visited', 'true');
      this.visited = true;
    }
  }

}
