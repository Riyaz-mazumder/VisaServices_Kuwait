import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddVisaFormComponent } from './add-visa-form/add-visa-form.component';
import { ViewVisaPdfComponent } from './view-visa-pdf/view-visa-pdf.component';
import { ListOfVisaComponent } from './list-of-visa/list-of-visa.component';
import { ViewMessageComponent } from './view-message/view-message.component';


const routes: Routes = [
    { path: 'addVisa', component: AddVisaFormComponent },
    { path: 'listOfVisa', component: ListOfVisaComponent },
    { path: 'viewMessages', component: ViewMessageComponent },
    { path: 'viewVisaPDF', component: ViewVisaPdfComponent },
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
