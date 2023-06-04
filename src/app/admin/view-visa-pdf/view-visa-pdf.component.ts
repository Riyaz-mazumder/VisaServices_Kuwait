import { Component, ElementRef, OnInit, Pipe, PipeTransform, Renderer2, ViewChild } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';

import { PDFDocument} from 'pdf-lib'

import * as PDFLib from 'pdf-lib';
import { PdfDataSenderService } from '../pdf-data-sender.service';


@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private domSanitizer: DomSanitizer) {}
  transform(url: string) {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }
} 


@Component({
  selector: 'app-view-visa-pdf',
  templateUrl: './view-visa-pdf.component.html',
  styleUrls: ['./view-visa-pdf.component.scss']
})
export class ViewVisaPdfComponent implements OnInit{

  constructor(private pdfDataService: PdfDataSenderService) {}

  // @ViewChild('myPdf', { static: false }) iframeRef: ElementRef | undefined;



   urlIframe: string = "";

   visaData: any;

   ngOnInit(): void {
       this.visaData = this.pdfDataService.getData();

       
    // const formValues = this.visaData;
    // console.log(formValues);
  
    // const visaNumber = formValues.visaNumber;
    // const visaTypeInArabic = formValues.visaTypeInArabic;
    // const visaType = formValues.visaType;
    // const visaPurposeInArabic = formValues.visaPurposeInArabic;
    // const visaPurpose = formValues.visaPurpose;
    // const dateOfExpiry = formValues.dateOfExpiry;
    // const dateOfIssue = formValues.dateOfIssue;
    // const employerFullName = formValues.employerFullName;
    // const employerMOIReference = formValues.employerMOIReference;
    // const employerMobileNumber = formValues.employerMobileNumber;
    // const holderDateOfBirth = formValues.holderDateOfBirth;
    // const holderDateOfIssue = formValues.holderDateOfIssue;
    // const holderExpiryDate = formValues.holderExpiryDate;
    // const holderFullName = formValues.holderFullName;
    // const holderFullNameInArabic = formValues.holderFullNameInArabic;
    // const holderGender = formValues.holderGender;
    // const holderMOIReference = formValues.holderMOIReference;
    // const holderNationality = formValues.holderNationality;
    // const holderOccupation = formValues.holderOccupation;
    // const holderOccupationInArabic = formValues.holderOccupationInArabic;
    // const holderPassportNo = formValues.holderPassportNo;
    // const holderPassportType = formValues.holderPassportType;
    // const holderPlaceOfIssue = formValues.holderPlaceOfIssue;
  
    // console.log('visaNumber:', visaNumber);
    // console.log('visaTypeInArabic:', visaTypeInArabic);
    // console.log('visaType:', visaType);
    // console.log('visaPurposeInArabic:', visaPurposeInArabic);
    // console.log('visaPurpose:', visaPurpose);
    // console.log('dateOfExpiry:', dateOfExpiry);
    // console.log('dateOfIssue:', dateOfIssue);
    // console.log('employerFullName:', employerFullName);
    // console.log('employerMOIReference:', employerMOIReference);
    // console.log('employerMobileNumber:', employerMobileNumber);
    // console.log('holderDateOfBirth:', holderDateOfBirth);
    // console.log('holderDateOfIssue:', holderDateOfIssue);
    // console.log('holderExpiryDate:', holderExpiryDate);
    // console.log('holderFullName:', holderFullName);
    // console.log('holderFullNameInArabic:', holderFullNameInArabic);
    // console.log('holderGender:', holderGender);
    // console.log('holderMOIReference:', holderMOIReference);
    // console.log('holderNationality:', holderNationality);
    // console.log('holderOccupation:', holderOccupation);
    // console.log('holderOccupationInArabic:', holderOccupationInArabic);
    // console.log('holderPassportNo:', holderPassportNo);
    // console.log('holderPassportType:', holderPassportType);
    // console.log('holderPlaceOfIssue:', holderPlaceOfIssue);


        this.genaratePdf("245397868", "سمة دخول عمل اهلى")
   }


   genaratePdf = async (visaNumber: string, visaTypeInArabic: string) => {
    const {PDFDocument, rgb} = PDFLib;

    const exBytes = await fetch("./assets/pdf/visa.pdf").then(res=>{
      return res.arrayBuffer();
    });

    // const font = await fetch("./").then(res =>{
    //   return res.arrayBuffer();
    // });


   const pdfDoc = await PDFDocument.load(exBytes);

  //  pdfDoc.registerFontkit(fontKit);

  // const myFont = await pdfDoc.embedFont(font);

  const pages = pdfDoc.getPages();
  const firstPage = pages[0];

  // firstPage.drawText(visaNumber,{
  //   x: 272,
  //   y: 674,
  //   size: 10,
  // })

  firstPage.drawText(visaTypeInArabic,{
    x: 272,
    y: 654,
    size: 10,
  })




   const uri = await pdfDoc.saveAsBase64({dataUri: true});


   let pdf = document.querySelector('#myPdf') as HTMLElement;

   pdf.setAttribute('src', uri);



    


  }

}
