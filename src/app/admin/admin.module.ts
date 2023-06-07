import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashbordComponent } from './dashbord/dashbord.component';
import { AddVisaFormComponent } from './add-visa-form/add-visa-form.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { RouterModule } from '@angular/router';
import { ViewVisaPdfComponent } from './view-visa-pdf/view-visa-pdf.component';
import { ListOfVisaComponent } from './list-of-visa/list-of-visa.component';
import { ViewMessageComponent } from './view-message/view-message.component';



@NgModule({
  declarations: [
    DashbordComponent,
    AddVisaFormComponent,
    AdminComponent,
    ViewVisaPdfComponent,
    ListOfVisaComponent,
    ViewMessageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    AdminRoutingModule,
    RouterModule
  ],
  // providers: [PdfDataSenderService], // Add the service here
})
export class AdminModule { }
