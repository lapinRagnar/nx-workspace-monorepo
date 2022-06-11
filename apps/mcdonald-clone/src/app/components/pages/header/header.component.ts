import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'mon-nx-monorepo-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  
  ouvrirMenuBoutonConnexion = false
  isConnexion = true
  showDropdown: boolean

  constructor(
    private router: Router
  ) {
    this.showDropdown = false
  } 

  ngOnInit() {
    console.log('entréé souris', this.showDropdown);
    
  }

  
  afficherMenu(){
    this.showDropdown = true
    console.log('entréé souris', this.showDropdown);
  }

  cacherMenu(){
    this.showDropdown = false
    console.log('sortie souris', this.showDropdown);
  }


  handleOuvrirBtnConnexion() {
    this.ouvrirMenuBoutonConnexion = !this.ouvrirMenuBoutonConnexion
  }

  goToConnexion(){
    this.router.navigate(['/connexion'])
    this.isConnexion = false
  }

  goToInscription(){
    this.router.navigate(['/inscription'])
    this.isConnexion = false
  }

  goToHome() {
    this.router.navigate(['/'])
    this.isConnexion = true
  }

  goToNosEngagement() {
    this.router.navigate(['/nos-engagements'])
  }

}
