import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import QRCodeStyling from 'qr-code-styling';

@Component({
  selector: 'app-kuwait-visa-services',
  templateUrl: './kuwait-visa-services.component.html',
  styleUrls: ['./kuwait-visa-services.component.scss']
})




export class KuwaitVisaServicesComponent implements OnInit {

  @ViewChild("canvas", { static: true }) canvas: ElementRef | undefined;

  ngOnInit(): void {

    console.log(QRCodeStyling);
    if (!QRCodeStyling) {
      return;
    }
    
    const qrCode = new QRCodeStyling({
      width: 93,
      height: 93,
      margin: 0,
      data: "http://localhost:4200/companies/e-visa/verify/kuwaitVisaServices/1",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
      dotsOptions: {
        color: "#88a9c7",
        type: "dots"
      },
      cornersSquareOptions:{
        color: "#176396",
        type: "square"
      },
      cornersDotOptions:{
        color: "#176396",
        type: "square"
      },
      backgroundOptions: {
        color: "#e9ebee"
      },
      imageOptions: {
        crossOrigin: "anonymous",
        margin: 2.5
      }
    });

    qrCode.append(this.canvas?.nativeElement);


  }
}
