import { Component } from '@angular/core';

@Component({
  selector: 'mon-nx-monorepo-mon-lab',
  templateUrl: './mon-lab.component.html',
  styleUrls: ['./mon-lab.component.scss'],
})
export class MonLabComponent  {


  appelChiffre(chiffre: HTMLInputElement): void {
    console.log(chiffre.value);
    
  }
}
