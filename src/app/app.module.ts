import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './common/footer/footer.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { HomePageComponent } from './frontEnd/home-page/home-page.component';
import { LandingPageComponent } from './common/landing-page/landing-page.component';
import { KuwaitVisaServicesComponent } from './frontEnd/kuwait-visa-services/kuwait-visa-services.component';
import { AboutUsComponent } from './frontEnd/about-us/about-us.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    HomePageComponent,
    LandingPageComponent,
    KuwaitVisaServicesComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
