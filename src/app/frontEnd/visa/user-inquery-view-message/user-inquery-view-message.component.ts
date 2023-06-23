import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataServicService } from 'src/app/admin/data-servic.service';

@Component({
  selector: 'app-user-inquery-view-message',
  templateUrl: './user-inquery-view-message.component.html',
  styleUrls: ['./user-inquery-view-message.component.scss']
})
export class UserInqueryViewMessageComponent {

  constructor(
    private route: ActivatedRoute,
    private dataService: DataServicService,
  ){}

  id!: number;
  data!: any;
  ngOnInit(): void {
     this.id =  this.route.snapshot.params[("id")];
     console.log(this.id);

     this.dataService.getVisaById(this.id).subscribe({
      next: n =>{
       this.data = n;
      }, 
      error: err =>{
        console.log(err);
        
      }
     })
     
  }

}
