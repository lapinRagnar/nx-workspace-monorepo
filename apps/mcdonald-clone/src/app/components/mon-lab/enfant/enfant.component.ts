import { Component, Input } from '@angular/core';

@Component({
  selector: 'mon-nx-monorepo-enfant',
  template: ` 

    <p>dans l'enfant: {{ item }} </p>
    
    `,
  styles: [],
})
export class EnfantComponent  {


  @Input() item: string
 
  direBonjour() {
    console.log("bonjour");    
  }


}
