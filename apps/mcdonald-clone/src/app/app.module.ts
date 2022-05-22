import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/pages/header/header.component';
import { FooterComponent } from './components/pages/footer/footer.component';
import { BodyComponent } from './components/pages/body/body.component';
import { SousMenuProduitsComponent } from './components/outils/sous-menu-produits/sous-menu-produits.component';
import { CarouselModule } from './modules/carousel/carousel.module';
import { NosEngagementsComponent } from './components/pages/body/nos-engagements/nos-engagements.component';
import { LesBigQuestionsComponent } from './components/pages/body/les-big-questions/les-big-questions.component';
import { EnFamilleComponent } from './components/pages/body/en-famille/en-famille.component';
import { NosProduitsComponent } from './components/pages/body/nos-produits/nos-produits.component';
import { NosActualitesComponent } from './components/pages/body/nos-actualites/nos-actualites.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { CoreAnimationDirective } from './directives/gsap/core-animation.directive';
import { MonLabComponent } from './components/mon-lab/mon-lab.component';
import { CustomerListComponent } from './components/mon-lab/customer-list/customer-list.component';
import { ViewchildBindingTutoComponent } from './components/mon-lab/viewchild-binding-tuto/viewchild-binding-tuto.component';
import { EnfantComponent } from './components/mon-lab/enfant/enfant.component';
import { ParentComponent } from './components/mon-lab/parent/parent.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { RegisterComponent } from './components/authentication/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    SousMenuProduitsComponent,
    NosEngagementsComponent,
    LesBigQuestionsComponent,
    EnFamilleComponent,
    NosProduitsComponent,
    NosActualitesComponent,
    CoreAnimationDirective,
    MonLabComponent,
    CustomerListComponent,
    ViewchildBindingTutoComponent,
    EnfantComponent,
    ParentComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [BrowserModule, NgbModule, CarouselModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
