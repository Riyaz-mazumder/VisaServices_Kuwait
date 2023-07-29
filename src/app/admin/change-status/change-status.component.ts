import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DataServicService } from '../data-servic.service';

@Component({
  selector: 'app-change-status',
  templateUrl: './change-status.component.html',
  styleUrls: ['./change-status.component.scss']
})


export class ChangeStatusComponent implements OnInit{

constructor(
  private route: ActivatedRoute,
  private service: DataServicService
){}


  ngOnInit(): void {
   this.id = this.route.snapshot.params["id"];

   this.service.getVisaById(this.id).subscribe({
    next: r =>{
      this.data = r;
    },
    error: e =>{
      console.log(e);
      
    }
   })
  }

  id!: any;
  data!: any;

  submit(d: NgForm){

  }

}
