import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddVisaFormComponent } from './add-visa-form/add-visa-form.component';
import { ViewVisaPdfComponent } from './view-visa-pdf/view-visa-pdf.component';


const routes: Routes = [
    { path: 'addVisa', component: AddVisaFormComponent },
    { path: 'ViewVisaPdf', component: ViewVisaPdfComponent },
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
