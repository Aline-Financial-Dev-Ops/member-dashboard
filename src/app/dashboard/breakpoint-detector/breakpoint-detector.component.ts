import {AfterViewInit, Component, HostListener} from '@angular/core';
import {BreakpointService} from '@dashboard/breakpoint-detector/breakpoint.service';
import {SCREEN_SIZE} from '@dashboard/breakpoint-detector/screen-size';

@Component({
  selector: 'app-breakpoint-detector',
  templateUrl: './breakpoint-detector.component.html',
  styleUrls: ['./breakpoint-detector.component.sass']
})
export class BreakpointDetectorComponent implements AfterViewInit {

  constructor(private service: BreakpointService) {}

  @HostListener('window:resize', ['$event'])
  onResize() {
    const width = window.innerWidth;
    console.log('Resizing', width);
    if (width < 576) {
      this.service.onResize(SCREEN_SIZE.XS);
    } else if (width < 768) {
      this.service.onResize(SCREEN_SIZE.SM);
    } else if (width < 992) {
      this.service.onResize(SCREEN_SIZE.MD);
    } else if (width < 1200) {
      this.service.onResize(SCREEN_SIZE.LG);
    } else if (width < 1400) {
      this.service.onResize(SCREEN_SIZE.XL);
    } else {
      this.service.onResize(SCREEN_SIZE.XXL);
    }
  }

  ngAfterViewInit(): void {
    this.onResize();
  }

}
