import { Component } from '@angular/core';

@Component({
  selector: 'mon-nx-monorepo-parent',
  template: ` 
    <hr>
    <p>Dans le parent : {{ parentVariable }} </p>

    <!-- <p>variable de l'enfant : {{ comment_ca_va }} </p> -->
    <mon-nx-monorepo-enfant [item]="parentVariable" ></mon-nx-monorepo-enfant> 
  `,
  styles: [],
})
export class ParentComponent {

  parentVariable = "Bonjour avec @Input"  // variable à exporter dans l'enfant

}
