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
      width:103,
      height: 103,
      margin: 0,
      data: "https://eres.moi.gov.kw/companies/e-visa/verify/CfDJ8ABf48FYOABHi2chJb1ozW2zu_b3qcd4gERvIRIWSH-lcVN2_97_o5uqofj_hoeSpEEUJYy35TIMHl1vL07Cqwv1NmiFhSqL54z77DotWBN8RG_kuD1-BQwnxheWP6bjQQ/CfDJ8ABf48FYOABHi2chJb1ozW0NLIvzA_iUK2xg6_C3Sxcpu3cvO_cNre_nQJxfzxD_BoBNoPoRimrrMbECGrlOdvRM-cxlD7D0pu_5OjAhhpG90xi7Ogak6PyrFl2H4e6WeA",
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
