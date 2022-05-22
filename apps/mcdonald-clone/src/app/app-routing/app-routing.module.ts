import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LesBigQuestionsComponent } from './../components/pages/body/les-big-questions/les-big-questions.component';
import { BodyComponent } from './../components/pages/body/body.component';
import { EnFamilleComponent } from './../components/pages/body/en-famille/en-famille.component';
import { NosActualitesComponent } from './../components/pages/body/nos-actualites/nos-actualites.component';
import { LoginComponent } from '../components/authentication/login/login.component';
import { RegisterComponent } from '../components/authentication/register/register.component';


const routes: Routes = [
  {path: '', component: BodyComponent},
  {path: 'les-big-questions', component: LesBigQuestionsComponent},
  {path: 'en-famille', component: EnFamilleComponent},
  {path: 'nos-actualites', component: NosActualitesComponent},
  {path: 'connexion', component: LoginComponent},
  {path: 'inscription', component: RegisterComponent},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
