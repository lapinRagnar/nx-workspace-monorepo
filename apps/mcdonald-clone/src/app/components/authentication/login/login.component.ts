import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mon-nx-monorepo-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  isConnexion: boolean
  constructor() {

    console.log("je suis dans le constructeur de login");
  }



  ngOnInit(): void {
    console.log("dans login")
    
  }

}
