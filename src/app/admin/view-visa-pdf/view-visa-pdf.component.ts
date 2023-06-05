import { Component, ElementRef, OnInit, Pipe, PipeTransform, Renderer2, ViewChild } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';

import { PDFDocument} from 'pdf-lib'

import * as PDFLib from 'pdf-lib';

import * as fontkit from '@pdf-lib/fontkit';


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

  

   const pdfDoc = await PDFDocument.load(exBytes);

 
  const pages = pdfDoc.getPages();
  const firstPage = pages[0];

  // firstPage.drawText(visaNumber,{
  //   x: 272,
  //   y: 674,
  //   size: 9.5,
  // })

  pdfDoc.setLanguage(' ')

    const arabicFont = await fetch("assets/font/Cairo-ExtraLight.ttf").then(res =>{
      return res.arrayBuffer();
    });

  //   const arabicFontPath = './assets/font/Cairo-ExtraLight.ttf';
  // const arabicFontBytes = await fetch(arabicFontPath).then(res => res.arrayBuffer());

  // const arabicFont = await pdfDoc.embedFont(arabicFontBytes);

     pdfDoc.registerFontkit(fontkit);
     const CairoFont = await pdfDoc.embedFont(arabicFont);

    // firstPage.setFont(CairoFont);
  firstPage.drawText(visaTypeInArabic,{
    x: 272,
    y: 654,
    size: 9.5,
    font: CairoFont,
  })




   const uri = await pdfDoc.saveAsBase64({dataUri: true});


   let pdf = document.querySelector('#myPdf') as HTMLElement;

   pdf.setAttribute('src', uri);



    


  }

}


// Assuming you have separate Arabic and English font files in the assets folder

// import * as fs from 'fs'; // If using Node.js
// import path from 'path'; // If using Node.js

// // ...

// genaratePdf = async (visaNumber: string, visaTypeInArabic: string) => {
//   // ...

//   // Load the Arabic and English font files as array buffers
//   const arabicFontPath = './assets/ArabicFont.ttf';
//   const arabicFontBytes = await fetch(arabicFontPath).then(res => res.arrayBuffer());

//   const englishFontPath = './assets/EnglishFont.ttf';
//   const englishFontBytes = await fetch(englishFontPath).then(res => res.arrayBuffer());

//   // Embed the Arabic and English fonts in the PDF document
//   const arabicFont = await pdfDoc.embedFont(arabicFontBytes);
//   const englishFont = await pdfDoc.embedFont(englishFontBytes);

//   // Use the Arabic font for Arabic text
//   firstPage.setFont(arabicFont);
//   firstPage.drawText(visaTypeInArabic, {
//     x: 272,
//     y: 654,
//     size: 10,
//   });

//   // Use the English font for English text
//   const englishText = 'English Text';
//   firstPage.setFont(englishFont);
//   firstPage.drawText(englishText, {
//     x: 100,
//     y: 100,
//     size: 12,
//   });

//   // ...
// }
