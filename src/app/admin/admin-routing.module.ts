import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddVisaFormComponent } from './add-visa-form/add-visa-form.component';
import { ViewVisaPdfComponent } from './view-visa-pdf/view-visa-pdf.component';
import { ListOfVisaComponent } from './list-of-visa/list-of-visa.component';
import { ViewMessageComponent } from './view-message/view-message.component';
import { UploadVisaComponent } from './upload-visa/upload-visa.component';
import { ListOfUploadVisaComponent } from './list-of-upload-visa/list-of-upload-visa.component';
import { UploadVisaFileComponent } from './upload-visa-file/upload-visa-file.component';


const routes: Routes = [
    { path: 'addVisa', component: AddVisaFormComponent },
   
    { path: 'listOfVisa', component: ListOfVisaComponent },
    { path: 'listOfUploadedFile', component: ListOfUploadVisaComponent},
    { path: 'viewMessages', component: ViewMessageComponent },
    { path: 'viewVisaPDF', component: ViewVisaPdfComponent },
    { path: 'upload', component: UploadVisaFileComponent },
    { path: 'uploadVisa/:id', component: UploadVisaComponent },
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
