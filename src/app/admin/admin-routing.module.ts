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
    { path: 'addVisa', component: AddVisaFormComponent },
    { path: 'updateVisa/:id', component: EditVisaPdfComponent},
    { path: 'listOfVisa', component: ListOfVisaComponent },
    { path: 'listOfUploadedFile', component: ListOfUploadVisaComponent},
    { path: 'viewMessages', component: ViewMessageComponent },
    { path: 'viewVisaPDF', component: ViewVisaPdfComponent },
    { path: 'upload', component: UploadVisaFileComponent },
    { path: 'uploadVisa/:id', component: UploadVisaComponent },
    { path: 'changeStatus/:id', component: ChangeStatusComponent },
    { path: 'changeStatusMalual/:id', component: ChangeStatusManualComponent },
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
