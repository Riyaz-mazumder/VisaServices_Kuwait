import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataServicService } from '../data-servic.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list-of-upload-visa',
  templateUrl: './list-of-upload-visa.component.html',
  styleUrls: ['./list-of-upload-visa.component.scss']
})
export class ListOfUploadVisaComponent {

  constructor(
    private router: Router,
    private service: DataServicService,
    private http: HttpClient,
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
    this.service.deleteUploadedFile(id).subscribe({
      next: r =>{
        console.log(r);
        alert('Product Deleted');
        this.ngOnInit(); 
      },
      error: e =>{
        console.log(e); 
      }
    });
    
  }

  //pop up
  openDialog(): void {}

  openPdf(data: any){
    
      // download
      // Replace 'your_spring_boot_url' with the actual URL of your Spring Boot backend
      const url = `https://visaservicesspringboot-production.up.railway.app/api/v1/files/${data.fileId}`;
      this.http.get(url, { responseType: 'arraybuffer' })
        .subscribe((response: ArrayBuffer) => {
         this.saveFile(response, 'your-file-name.pdf');
        });
  }


  saveFile(data: ArrayBuffer, filename: string) {
    const blob = new Blob([data], { type: 'application/pdf' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    window.URL.revokeObjectURL(url);
  }


  changeStatus(value: any){
    this.router.navigate(["/admin/dashboard/changeStatusMalual/" + value.id]);
  }

}
