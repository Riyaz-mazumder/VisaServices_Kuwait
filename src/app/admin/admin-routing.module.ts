import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddVisaFormComponent } from './add-visa-form/add-visa-form.component';
import { ViewVisaPdfComponent } from './view-visa-pdf/view-visa-pdf.component';
import { ListOfVisaComponent } from './list-of-visa/list-of-visa.component';
import { ViewMessageComponent } from './view-message/view-message.component';
import { UploadVisaComponent } from './upload-visa/upload-visa.component';
import { ListOfUploadVisaComponent } from './list-of-upload-visa/list-of-upload-visa.component';
import { UploadVisaFileComponent } from './upload-visa-file/upload-visa-file.component';
import { EditVisaPdfComponent } from './edit-visa-pdf/edit-visa-pdf.component';
import { ChangeStatusComponent } from './change-status/change-status.component';
import { ChangeStatusManualComponent } from './change-status-manual/change-status-manual.component';


const routes: Routes = [
    { path: 'addVisa', title: 'Add Visa', component: AddVisaFormComponent },
    { path: 'updateVisa/:id', title: 'Update Visa', component: EditVisaPdfComponent},
    { path: 'listOfVisa', title: 'List Of Visa', component: ListOfVisaComponent },
    { path: 'listOfUploadedFile', title: 'list Of Uploaded File', component: ListOfUploadVisaComponent},
    { path: 'viewMessages', title: 'View Messages', component: ViewMessageComponent },
    { path: 'viewVisaPDF', title: 'View Visa PDF', component: ViewVisaPdfComponent },
    { path: 'upload', title: 'Upload', component: UploadVisaFileComponent },
    { path: 'uploadVisa/:id', title: 'Upload Visa', component: UploadVisaComponent },
    { path: 'changeStatus/:id', title: 'Change Status', component: ChangeStatusComponent },
    { path: 'changeStatusMalual/:id', title: 'Change Status Malual Visa', component: ChangeStatusManualComponent },
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
