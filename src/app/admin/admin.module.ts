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
import { EditVisaPdfComponent } from './edit-visa-pdf/edit-visa-pdf.component';
import { UploadVisaComponent } from './upload-visa/upload-visa.component';
import { ListOfUploadVisaComponent } from './list-of-upload-visa/list-of-upload-visa.component';
import { UploadVisaFileComponent } from './upload-visa-file/upload-visa-file.component';



@NgModule({
  declarations: [
    DashbordComponent,
    AddVisaFormComponent,
    AdminComponent,
    ViewVisaPdfComponent,
    ListOfVisaComponent,
    ViewMessageComponent,
    EditVisaPdfComponent,
    UploadVisaComponent,
    ListOfUploadVisaComponent,
    UploadVisaFileComponent,
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
