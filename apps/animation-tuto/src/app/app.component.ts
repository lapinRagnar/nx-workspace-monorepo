import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  stagger,
  keyframes,
  // ...
} from '@angular/animations';



@Component({
  selector: 'mon-nx-monorepo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    // trigger('openClose', [
    //   // ...
    //   state('open', style({
    //     height: '200px',
    //     opacity: 1,
    //     backgroundColor: 'yellow'
    //   })),
    //   state('closed', style({
    //     height: '100px',
    //     opacity: 0.8,
    //     backgroundColor: 'blue'
    //   })),
    //   transition('open <=> closed', [
    //     animate('1s')
    //   ]),
    //   transition('closed <=> open', [
    //     animate('0.5s')
    //   ]),
    // ]),
    // fade,
    trigger(
      'listAnimation',
      [
        transition('* => *', [
          query(':enter', style({opacity: 0}), {optional: true}),
          query(
            ':enter',
            stagger(
              '300ms',
              [
                animate(
                  '1s ease-in',
                  keyframes(
                    [
                      style({opacity: 0, transform: 'translateY(-75px)', offset: 0}),
                      style({opacity: 0.5, transform: 'translateY(-35px)', offset: 0.3}),
                      style({opacity: 1, transform: 'translateY(0)', offset: 1}),
                    ]
                  )
                )
              ]),
              {optional: true}
            ),
            query(
              ':leave',
              stagger(
                '300ms',
                [
                  animate(
                    '1s ease-in',
                    keyframes(
                      [
                        style({opacity: 1, transform: 'translateY(0)', offset: 0}),
                        style({opacity: 0.5, transform: 'translateY(-35px)', offset: 0.3}),
                        style({opacity: 0, transform: 'translateY(-75px)', offset: 1}),
                      ]
                    )
                  )
                ]),
                {optional: true}
            )
        ])
      ]
    )
  ]
})
export class AppComponent {
  title = 'animation-tuto';
  isOpen = true;
  items: string[] = []

  constructor(){
    this.items = ['ceci est un item', 'ceci est un autre item', 'ceci est encore un autre item' ]
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }

  pushItem() {
    this.items.push("c'est cool ca marche!")
  }

  removeItem() {
    this.items.pop()
  }

}
