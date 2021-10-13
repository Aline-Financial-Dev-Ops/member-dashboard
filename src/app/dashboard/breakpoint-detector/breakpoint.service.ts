import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {SCREEN_SIZE} from '@dashboard/breakpoint-detector/screen-size';
import {distinctUntilChanged} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BreakpointService {

  private resizeSubject: Subject<SCREEN_SIZE>;

  constructor() {
    this.resizeSubject = new Subject<SCREEN_SIZE>();
  }

  get onResize$(): Observable<SCREEN_SIZE> {
    return this.resizeSubject.asObservable().pipe(distinctUntilChanged());
  }

  onResize(size: SCREEN_SIZE) {
    this.resizeSubject.next(size);
  }

}
