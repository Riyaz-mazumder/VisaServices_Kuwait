import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.scss']
})
export class DashbordComponent implements OnInit{

  constructor(
    private router: Router
  ) {}

  storedValue!: any;
  ngOnInit(): void {
    this.storedValue = sessionStorage.getItem('admin');
  }

  searchProducts(data: NgForm){

  }

  logOut(){
    sessionStorage.removeItem('admin');
    this.router.navigate(['/admin']);

  }
}
