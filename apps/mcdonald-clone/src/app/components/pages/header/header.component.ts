import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mon-nx-monorepo-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  
  ouvrirMenuBoutonConnexion = false

  constructor() {}

  ngOnInit(): void {
  }

  handleOuvrirBtnConnexion() {
    this.ouvrirMenuBoutonConnexion = !this.ouvrirMenuBoutonConnexion
  }


}
