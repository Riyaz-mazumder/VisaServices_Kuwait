import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddVisaFormComponent } from './add-visa-form/add-visa-form.component';


const routes: Routes = [
    { path: 'addVisa', component: AddVisaFormComponent },
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
