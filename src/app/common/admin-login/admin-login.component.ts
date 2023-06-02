import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent {

  constructor(
    private router: Router
  ) {}


  allUser!: any;
  ngOnInit(): void {
    // this.service.getAllUsers().subscribe({
    //   next: (r) => {
    //     this.allUser = r;
    //   },
    //   error: (err) => {
    //     alert(err);
    //   },
    // });
  }

  message:string = "";

  formSubmit(data: NgForm) {
    console.log(data.value);
    console.log(this.allUser);

    let foundUser = this.allUser.find((e: any) => {
      return e.email === data.value.email && e.password === data.value.password;
    });


    // if (foundUser) {
    //   this.authService.saveUser(foundUser);

    //   this.message = "Welcome Back ' + data.value.name + ' ! ❤️"
    //   this.showMessage();

    //   this.router.navigate(['/home']);

    // } else {
    //   this.message = 'User Name Or Password Is InCorrect..'
    //   alert( 'User Name Or Password Is InCorrect..')
    // }
  }

  
  showMessageFlag: boolean = false;


public  closeMessage() {
    this.showMessageFlag = false;
  }
 public showMessage() {
    this.showMessageFlag = true;
    setTimeout(() => {
      this.showMessageFlag = false;
    }, 3000);
  }

}
