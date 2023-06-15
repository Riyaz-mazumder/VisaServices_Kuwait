import { Component, OnInit } from '@angular/core';
import { DataserviceService } from 'src/app/service/dataservice.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor(private service: DataserviceService){}

  imageSrc!: any;
  imgByte!: any;


  ngOnInit(): void {
    this.service.getQrCode("kkk").subscribe({
      next: r=>{
        this.imgByte = r;
      }
    });
    this.imageSrc = this.convertBytesToImageURL(this.imgByte);
    console.log(this.imageSrc);
    
  }

  public convertBytesToImageURL(imageBytes: Uint8Array): string {
    const blob = new Blob([imageBytes], { type: 'image/png' });
    return URL.createObjectURL(blob);
  }

  
  

}
