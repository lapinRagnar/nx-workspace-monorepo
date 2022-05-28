import { animate, keyframes, query, stagger, style, transition, trigger } from "@angular/animations";

export const listAnimation = trigger(
    'listAnimation',
    [
      transition('* => *', [
        query('.paragraphe', style({opacity: 0}), {optional: true}),
        query(
          '.paragraphe',
          stagger(
            '1s',
            [
              animate(
                '2s ease-in',
                keyframes(
                  [
                    style({opacity: 0, transform: 'translateY(75px)', offset: 0}),
                    style({opacity: 0.5, transform: 'translateY(35px)', offset: 0.3}),
                    style({opacity: 1, transform: 'translateY(0)', offset: 1}),
                  ]
                )
              )
            ]
          ),
          {optional: true}
        )
      ])
    ]
  )
