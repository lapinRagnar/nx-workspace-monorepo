import { Component, ViewChild, ElementRef } from '@angular/core';
import { EnfantComponent } from '../enfant/enfant.component';

@Component({
  selector: 'mon-nx-monorepo-viewchild-binding-tuto',
  templateUrl: './viewchild-binding-tuto.component.html',
  styleUrls: ['./viewchild-binding-tuto.component.scss'],
})
export class ViewchildBindingTutoComponent  {
  
  @ViewChild('dobInput') dateOfBirth: ElementRef
  @ViewChild('ageInput') age: ElementRef
  @ViewChild(EnfantComponent, {static: true}) enfant: EnfantComponent

  calculateAge(){
    console.log(this.dateOfBirth);
    console.log(this.age);
    const birthYear = new Date(this.dateOfBirth.nativeElement.value).getFullYear()
    const currentYear = new Date().getFullYear()
    const age = currentYear - birthYear
    this.age.nativeElement.value = age
  }
}
