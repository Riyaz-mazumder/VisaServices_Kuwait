import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataServicService } from '../data-servic.service';

@Component({
  selector: 'app-change-status-manual',
  templateUrl: './change-status-manual.component.html',
  styleUrls: ['./change-status-manual.component.scss']
})
export class ChangeStatusManualComponent implements OnInit{


  
constructor(
  private route: ActivatedRoute,
  private service: DataServicService,
  private router: Router,
){}


  ngOnInit(): void {
   this.id = this.route.snapshot.params["id"];

   this.service.getUploadedFileId(this.id).subscribe({
    next: r =>{
      this.data = r;
      console.log(this.data);
      
    },
    error: e =>{
      console.log(e);
      
    }
   })
  }

  id!: any;
  data!: any;

  submit(d: NgForm){

    const statusValue = d.value.active;
    console.log(d.value);
    
    console.log(statusValue);
    

    this.data.active = statusValue;

    this.service.updateUploadedFile(this.data).subscribe({
      next: r =>{
        console.log(r);
        alert("Status Changed Successfully")
        this.router.navigate(["/admin/dashboard/listOfUploadedFile"])

      },
      error: e =>{
        console.log(e);
        alert("Somthing went Wrong Try Again")
        
      }
    })

  }

}
