import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './common/landing-page/landing-page.component';
import { HomePageComponent } from './frontEnd/home-page/home-page.component';
import { AboutUsComponent } from './frontEnd/about-us/about-us.component';
import { KuwaitVisaServicesComponent } from './frontEnd/kuwait-visa-services/kuwait-visa-services.component';
import { ContactComponent } from './frontEnd/contact/contact.component';
import { DashbordComponent } from './admin/dashbord/dashbord.component';
import { AdminLoginComponent } from './common/admin-login/admin-login.component';
import { VisaApprovalAndTrackingComponent } from './frontEnd/visa/visa-approval-and-tracking/visa-approval-and-tracking.component';
import { VisaInqueryAndPrintingComponent } from './frontEnd/visa/visa-inquery-and-printing/visa-inquery-and-printing.component';
import { EVisaComponent } from './frontEnd/visa/e-visa/e-visa.component';
import { ViewVisaPdfUserComponent } from './frontEnd/visa/view-visa-pdf-user/view-visa-pdf-user.component';
import { UserVisaVerifyComponent } from './frontEnd/visa/user-visa-verify/user-visa-verify.component';
import { ManualVisaComponent } from './frontEnd/visa/manual-visa/manual-visa.component';
import { ManualVisaMessageComponent } from './frontEnd/visa/manual-visa-message/manual-visa-message.component';
import { UserInqueryViewComponent } from './frontEnd/visa/user-inquery-view/user-inquery-view.component';
import { UserInqueryViewMessageComponent } from './frontEnd/visa/user-inquery-view-message/user-inquery-view-message.component';

const routes: Routes = [
  // { path: '', component: LandingPageComponent },
  // { path: '', redirectTo: 'home', pathMatch: 'full' },  // Redirect to HomeComponent when the path is empty
  {
    path: 'companies/e-visa/verify/CfDJ8ABf48FYOABHi2chJb1ozW2zu_b3qcd4gERvIRIWSH-lcVN2_97_o5uqofj_hoeSpEEUJYy35TIMHl1vL07Cqwv1NmiFhSqL54z77DotWBN8RG_kuD1-BQwnxheWP6bjQQ/CfDJ8ABf48FYOABHi2chJb1ozW0NLIvzA_iUK2xg6_C3Sxcpu3cvO_cNre_nQJxfzxD_BoBNoPoRimrrMbECGrlOdvRM-cxlD7D0pu/:id',
    title: '-Ministry of Interior - Kuwait',
   component: UserVisaVerifyComponent
 
 },
  { path: '',  title: 'Home Page', component: HomePageComponent},
  { path: 'aboutUs',  title: 'About Us', component: AboutUsComponent },
  { path: 'kuwaitVisaServices',  title: 'Kuwait Visa Services',  component: KuwaitVisaServicesComponent},
  { path: 'contactUs', title: 'Contact Us',  component: ContactComponent},
  { path: 'FAQ',  title: 'FAQ', component: LandingPageComponent },
  { path: 'visaApprovalAndTracking', title: 'Visa Approval And Tracking', component: VisaApprovalAndTrackingComponent},
  { path: 'visaInqueryAndPrinting', title: 'Visa Inquery And Printing', component: VisaInqueryAndPrintingComponent},
  { path: 'visaRelatedInformationAndTracking', title: 'Visa Related Information And Tracking', component: UserInqueryViewComponent},
  { path: 'visaRelatedInformationAndTracking/message/:id', title: 'Visa Related Information And Tracking Message', component: UserInqueryViewMessageComponent},

  { path: 'eVisa', title: 'eVisa', component: EVisaComponent},
  { path: 'eVisa/print', title: 'eVisa Printing', component: ViewVisaPdfUserComponent},
  { path: 'manualVisa', title: 'Manual Visa', component: ManualVisaComponent},
  { path: 'manualVisa/message/:id', title: 'Manual Visa Message', component: ManualVisaMessageComponent},



  { path: 'admin', title: 'Admin', component: AdminLoginComponent },

  { path: 'admin/dashboard', title: 'Admin Dashbord', component: DashbordComponent, loadChildren:() => import('./admin/admin.module').then(x=>x.AdminModule),},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
    }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
