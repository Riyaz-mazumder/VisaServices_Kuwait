import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataServicService } from 'src/app/admin/data-servic.service';

@Component({
  selector: 'app-manual-visa-message',
  templateUrl: './manual-visa-message.component.html',
  styleUrls: ['./manual-visa-message.component.scss']
})

export class ManualVisaMessageComponent implements OnInit{

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
