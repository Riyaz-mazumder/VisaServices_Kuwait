import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataServicService } from '../data-servic.service';

@Component({
  selector: 'app-list-of-upload-visa',
  templateUrl: './list-of-upload-visa.component.html',
  styleUrls: ['./list-of-upload-visa.component.scss']
})
export class ListOfUploadVisaComponent {

  constructor(
    private router: Router,
    private service: DataServicService
  ) {}
  allProducts!: any;

  ngOnInit() {
    this.service.getAllUploadedFile().subscribe({
      next: (r) => {
        this.allProducts = r;
        console.log(this.allProducts);
        
        this.allProducts.reverse();
      },
      error: (err) => {
        alert(err);
        console.log(err);
      },
    });
    
  }

  onUpdate(d: any) {
    // // const dialogRef = this.dialog.open(EditProductComponent, {
    // //   data: d,
    // });

    // dialogRef.afterClosed().subscribe((result) => {
    //   console.log(`Dialog result: ${result}`);
    // });
  }

  onDelete(id: any) {
    this.service.deleteVisa(id).subscribe((r) => {});
    alert('Product Deleted');
    this.ngOnInit();
  }

  //pop up
  openDialog(): void {}

  openPdf(data: any){

  }
}
