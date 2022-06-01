import { Component, OnInit } from '@angular/core';
import {
  trigger,
  style,
  animate,
  transition,
  query,
  stagger,
  keyframes,
  state,
  // ...
} from '@angular/animations';
  import * as AOS from 'aos';
import { listAnimation } from '../../../animations/listAnimation';

@Component({
  selector: 'mon-nx-monorepo-les-big-questions',
  templateUrl: './les-big-questions.component.html',
  styleUrls: ['./les-big-questions.component.scss'],
  animations: [

    listAnimation
    ,

    trigger('colorerTexte', [
      state('open', style({
        height: '100px',
        opacity: 1,
        backgroundColor: '#ffe598'
      })),
      state('closed', style({
        height: '30px',
        opacity: 0.8,
        backgroundColor: 'blue'
      })),
      transition('* => *', [
        query(':enter', style({opacity: 0}), {optional: true}),
        query(
          ':enter',
          stagger(
            '1s',
            [
              animate('1s ease-in')
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
    ])

  ]
})
export class LesBigQuestionsComponent implements OnInit {
  
  questionReponseGauche = true
  questionReponseDroite = true
  questionReponseBasGauche = true
  questionReponseBasDroite = true
  questionReponseOnInvente = true

  ngOnInit(): void {
    AOS.init()
  }

  toggleQuestionReponseGauche() {
    this.questionReponseGauche = !this.questionReponseGauche
  }
  toggleQuestionReponseDroite() {
    this.questionReponseDroite = !this.questionReponseDroite
  }
  toggleQuestionReponseBasGauche() {
    this.questionReponseBasGauche = !this.questionReponseBasGauche
  }

  toggleQuestionReponseBasDroite() {
    this.questionReponseBasDroite = !this.questionReponseBasDroite
  }

  toggleQuestionReponseOnInvente() {
    this.questionReponseOnInvente = !this.questionReponseOnInvente 
  }

}
