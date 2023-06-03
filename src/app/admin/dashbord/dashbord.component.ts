import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.scss']
})
export class DashbordComponent implements OnInit{

  storedValue!: any;
  ngOnInit(): void {
    this.storedValue = sessionStorage.getItem('admin');
  }

}
