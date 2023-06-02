import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-visa-form',
  templateUrl: './add-visa-form.component.html',
  styleUrls: ['./add-visa-form.component.scss']
})
export class AddVisaFormComponent {

  
  submit(d: NgForm) {
    console.log(d.value);
    // this.service.addNewProduct(d.value).subscribe({
    //   next: (r) => {
    //     console.log(r);
    //   },
    //   error: (err) => {
    //     console.log(err);
    //     alert(err);
    //   },
    // });
    alert('Product Has Been Added');
    d.reset();
  }
}
