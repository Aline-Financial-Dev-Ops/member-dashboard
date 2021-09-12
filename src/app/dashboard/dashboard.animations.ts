import {trigger, group, query, animate, animateChild, state, animation, transition, style} from '@angular/animations';

export const slider =
  trigger('routeAnimations', [

    transition('* <=> *', [
      style({
        position: 'relative'
      }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          opacity: 0
        })
      ]),
      query(':enter', [
        animate('0.15s ease'),
        style({
          opacity: 1
        })
      ]),
    ])

  ]);
