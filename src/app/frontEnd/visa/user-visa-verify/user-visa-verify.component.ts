import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataServicService } from 'src/app/admin/data-servic.service';

@Component({
  selector: 'app-user-visa-verify',
  templateUrl: './user-visa-verify.component.html',
  styleUrls: ['./user-visa-verify.component.scss']
})
export class UserVisaVerifyComponent implements OnInit{

  constructor(
    private dataService: DataServicService,
    private router: Router,
    private route: ActivatedRoute
    ){}

    id!: any;

    data!: any;

    ngOnInit(): void {
      this.id = this.route.snapshot.params[("id")]
      console.log(this.id);

      this.dataService.getVisaById(this.id).subscribe({
        next: n =>{
          this.data = n;
          console.log(this.data); 
        },
        error: err =>{
          console.log(err);  
        }
      })
    
   }


}
