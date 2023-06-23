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

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'aboutUs', component: AboutUsComponent },
  { path: 'kuwaitVisaServices', component: KuwaitVisaServicesComponent},
  { path: 'contactUs', component: ContactComponent},
  { path: 'fqaKuwait', component: LandingPageComponent },
  { path: 'visaApprovalAndTracking', component: VisaApprovalAndTrackingComponent },
  { path: 'visaInqueryAndPrinting', component: VisaInqueryAndPrintingComponent},

  { path: 'eVisa', component: EVisaComponent},
  { path: 'eVisa/print', component: ViewVisaPdfUserComponent},
  { path: 'manualVisa', component: ManualVisaComponent},
  { path: 'manualVisa/message', component: ManualVisaMessageComponent},
  { path: 'companies/e-visa/verify/CfDJ8ABf48FYOABHi2chJb1ozW2zu_b3qcd4gERvIRIWSH-lcVN2_97_o5uqofj_hoeSpEEUJYy35TIMHl1vL07Cqwv1NmiFhSqL54z77DotWBN8RG_kuD1-BQwnxheWP6bjQQ/CfDJ8ABf48FYOABHi2chJb1ozW0NLIvzA_iUK2xg6_C3Sxcpu3cvO_cNre_nQJxfzxD_BoBNoPoRimrrMbECGrlOdvRM-cxlD7D0pu_5OjAhhpG90xi7Ogak6PyrFl2H4e6WeA/:id', component: UserVisaVerifyComponent},


  { path: 'admin', component: AdminLoginComponent },

  { path: 'admin/dashboard', component: DashbordComponent, loadChildren:() => import('./admin/admin.module').then(x=>x.AdminModule),},
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
