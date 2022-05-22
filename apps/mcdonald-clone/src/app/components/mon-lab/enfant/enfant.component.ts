import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mon-nx-monorepo-enfant',
  template: ` 

    <p>vers dans l'enfant: {{ item }} </p>
    <button (click)="addNewItem(value)" >Evoyer au parent</button>
    
    `,
  styles: [],
})
export class EnfantComponent  {

  value = 'comment ca va'

  @Input() item: string

  @Output() newEventEmitter = new EventEmitter<string>();


  addNewItem(value: string) {
    this.newEventEmitter.emit(value)
  }
 
  direBonjour() {
    console.log("bonjour");    
  }


}
