import { Component, OnInit } from '@angular/core';
import { PdfDataSenderService } from '../pdf-data-sender.service';
import { Router } from '@angular/router';
import { DataServicService } from '../data-servic.service';

@Component({
  selector: 'app-list-of-visa',
  templateUrl: './list-of-visa.component.html',
  styleUrls: ['./list-of-visa.component.scss']
})
export class ListOfVisaComponent implements OnInit{

  constructor(
    private pdfService: PdfDataSenderService,
    private router: Router,
    private service: DataServicService
  ) {}
  allProducts!: any;

  ngOnInit() {
    this.service.getAllVisa().subscribe({
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
    // const dialogRef = this.dialog.open(EditProductComponent, {
    //   data: d,
    // });

    // dialogRef.afterClosed().subscribe((result) => {
    //   console.log(`Dialog result: ${result}`);
    // });

    this.router.navigate(["/admin/dashboard/updateVisa/" + d.id]);


  }

  onDelete(id: any) {
    this.service.deleteVisa(id).subscribe((r) => {});
    alert('Product Deleted');
    this.ngOnInit();
  }

  //pop up
  openDialog(): void {}

  openPdf(data: any){
    console.log(data);
    
   this.pdfService.setData(data);
   
   this.router.navigate(["/admin/dashboard/viewVisaPDF"])

  }
}
