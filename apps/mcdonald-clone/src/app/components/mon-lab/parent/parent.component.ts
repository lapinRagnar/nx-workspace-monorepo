import { Component } from '@angular/core';

@Component({
  selector: 'mon-nx-monorepo-parent',
  template: ` 
    <hr>
    <p>Du le parent : {{ parentVariable }} </p>
    <p> donnée de l'enfant {{deLenfant}} </p>

    <!-- <p>variable de l'enfant : {{ comment_ca_va }} </p> -->
    <mon-nx-monorepo-enfant 
      [item]="parentVariable" 
      (newEventEmitter)="addItem($event)"
      >
    </mon-nx-monorepo-enfant> 
  `,
  styles: [],
})
export class ParentComponent {
  deLenfant = ''
  parentVariable = "Bonjour avec @Input"  // variable à exporter dans l'enfant

  addItem(newItem: string){
    this.deLenfant = newItem
  }
}
