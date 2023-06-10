import { Component, OnInit } from '@angular/core';
import { PdfDataSenderService } from '../pdf-data-sender.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-of-visa',
  templateUrl: './list-of-visa.component.html',
  styleUrls: ['./list-of-visa.component.scss']
})
export class ListOfVisaComponent implements OnInit{

  constructor(
    private pdfService: PdfDataSenderService,
    private router: Router
  ) {}
  allProducts!: any;

  ngOnInit() {
    // this.service.getAllProducts().subscribe({
    //   next: (r) => {
    //     this.allProducts = r;
    //     console.log(this.allProducts);
        
    //     this.allProducts.content.reverse();
    //   },
    //   error: (err) => {
    //     alert(err);
    //     console.log(err);
    //   },
    // });
    
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
    // this.service.deleteProduct(id).subscribe((r) => {});
    // alert('Product Deleted');
    // this.ngOnInit();
  }

  //pop up
  openDialog(): void {}

  openPdf(data: any){
   this.pdfService.setData(data);
   
   this.router.navigate(["/admin/dashboard/viewVisaPDF"])

  }
}
