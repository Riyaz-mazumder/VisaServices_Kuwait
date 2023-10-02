import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';
import { DataServicService } from 'src/app/admin/data-servic.service';
import { CustomTitleService } from 'src/app/service/custom-title.service';

@Component({
  selector: 'app-user-visa-verify',
  templateUrl: './user-visa-verify.component.html',
  styleUrls: ['./user-visa-verify.component.scss']
})
export class UserVisaVerifyComponent implements OnInit{

  constructor(
    private dataService: DataServicService,
    private customTitleService: CustomTitleService,
    private router: Router, private activatedRoute:    ActivatedRoute, private titleService: Title,
    ){
      this.router.events.pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => {
            let child = this.activatedRoute.firstChild;
            while (child) {
                if (child.firstChild) {
                    child = child.firstChild;
                } else if (child.snapshot.data &&    child.snapshot.data['title']) {
                    return child.snapshot.data['title'];
                } else {
                    return null;
                }
            }
            return null;
        })
    ).subscribe( (data: any) => {
        if (data) {
            this.titleService.setTitle(data + ' - Website Name');
        }
    });
    }

    id!: any;

    data!: any;

    ngOnInit(): void {
      this.id = this.activatedRoute.snapshot.params[("id")]
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
