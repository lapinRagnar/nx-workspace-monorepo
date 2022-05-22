import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mon-nx-monorepo-enfant',
  template: ` <p>enfant works!</p> `,
  styles: [],
})
export class EnfantComponent  {

  direBonjour() {
    console.log("bonjour");    
  }

}
