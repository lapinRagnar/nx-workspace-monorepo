import { Component} from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'mon-nx-monorepo-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  
  ouvrirMenuBoutonConnexion = false
  isConnexion = true

  constructor(
    private router: Router
  ) {}


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
