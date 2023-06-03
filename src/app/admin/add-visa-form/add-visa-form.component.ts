import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-visa-form',
  templateUrl: './add-visa-form.component.html',
  styleUrls: ['./add-visa-form.component.scss']
})
export class AddVisaFormComponent implements OnInit{

  storedValue!: any;
  ngOnInit(): void {
    this.storedValue = sessionStorage.getItem('admin');
  }


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
    alert('Visa Has Been Added');
    d.reset();
  }
}
