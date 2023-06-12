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
import { ContactComponent } from './frontEnd/contact/contact.component';
import { AdminLoginComponent } from './common/admin-login/admin-login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { VisaApprovalAndTrackingComponent } from './frontEnd/visa/visa-approval-and-tracking/visa-approval-and-tracking.component';
import { VisaInqueryAndPrintingComponent } from './frontEnd/visa/visa-inquery-and-printing/visa-inquery-and-printing.component';
import { EVisaComponent } from './frontEnd/visa/e-visa/e-visa.component';
import { ViewVisaPdfUserComponent } from './frontEnd/visa/view-visa-pdf-user/view-visa-pdf-user.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    HomePageComponent,
    LandingPageComponent,
    KuwaitVisaServicesComponent,
    AboutUsComponent,
    ContactComponent,
    AdminLoginComponent,
    VisaApprovalAndTrackingComponent,
    VisaInqueryAndPrintingComponent,
    EVisaComponent,
    ViewVisaPdfUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
