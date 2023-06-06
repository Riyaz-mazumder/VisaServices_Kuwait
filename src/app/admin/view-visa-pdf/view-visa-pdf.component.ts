import { Component, ElementRef, OnInit, Pipe, PipeTransform, Renderer2, ViewChild } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';

import { PDFDocument} from 'pdf-lib'

import * as PDFLib from 'pdf-lib';

// import * as fontkit from '@pdf-lib/fontkit';

declare var fontkit: any;


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
   // const employerFullNameinArabic = formValues.employerFullNameinArabic;
  
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
    // console.log('employerFullNameinArabic:', employerFullNameinArabic);


        this.genaratePdf("245397868", "سمة دخول عمل اهلى", "Private Sector Work Visa", "عمل", "Work", "2022-09-07",
         "2022-12-06", " ادارة عمل محافظة الفروانية", "اﻣﺪﻳﻌﺮﻳﻔﺎﺳﻼم  -  اﻣﺪﻳﺨﺎزاﻣﻴﺎ ", "MIA KHAZA MD ISLAM ARIFUL MD", "345096836", "BANGLADESH  ﺑﻨﺠﻼدﻳﺶ", "2022-09-07",
         "Male	ذﻛﺮ", "ﻋﺎﻣﻞ ﺗﻨﻈﻴﻒ / ﻣﻜﺎﺗﺐ", "CLEANER", "1999-01-01", "B00494110", "ﺑﻨﺠﻼدﻳﺶ", "Normal  ﻋﺎدي ", "2027-07-04", "MIA KHAZA MD ISLAM ARIFUL MD", "ﺷﺮﻛﻪ اﻟﻔﻴﺼﻞ ﻟﺤﺮاﺳﻪ اﻟﻤﻨﺸﺎت",
         "303122", "01626293706"
         )
   }


   genaratePdf = async (visaNumber: string, visaTypeInArabic: string, visaTypeInEnglish: string, visaPurposeInArabic: string, visaPurposeInEnglish: string, dateOfIssue: any, 
    dateOfExpiry: any, placeOfIssue: string, holderFullNameInArabic: string, holderFullName: string, holderMOIReference: string, holderNationality: string, holderDateOfIssue: any,
    holderGender: any, holderOccupationInArabic: any, holderOccupation: any, holderDateOfBirth: any, holderPassportNo: any, holderPlaceOfIssue: any, holderPassportType: any,
    holderExpiryDate: any, employerFullName: any, employerFullNameinArabic: any, employerMOIReference: any, employerMobileNumber: any
    ) => {
    const {PDFDocument, rgb} = PDFLib;

    const exBytes = await fetch("./assets/pdf/visa.pdf").then(res=>{
      return res.arrayBuffer();
    });

  

   const pdfDoc = await PDFDocument.load(exBytes);

 
  const pages = pdfDoc.getPages();
  const firstPage = pages[0];

  // const englishFont = await fetch("./assets/font/Roboto-Regular.ttf").then(res =>{
  //   return res.arrayBuffer();
  // });
  //  pdfDoc.registerFontkit(fontkit);
  //  const RobotoFont = await pdfDoc.embedFont(englishFont);

  const arabicFont = await fetch("./assets/font/Cairo-ExtraBold.ttf").then(res =>{
    return res.arrayBuffer();
  });
   pdfDoc.registerFontkit(fontkit);
   const CairoFont = await pdfDoc.embedFont(arabicFont);

   const textColor = rgb(46 / 255, 83 / 255, 150 / 255); // RGB percentages for hex
   const fontSize = 10;


  firstPage.drawText(visaNumber,{
    x: 272,
    y: 674,
    size: fontSize,
    font: CairoFont,
    color: textColor,
  })

    // firstPage.setFont(CairoFont);
  firstPage.drawText(visaTypeInArabic,{
    x: 252,
    y: 655,
    size: fontSize,
    font: CairoFont,
    color: textColor,
  })


  firstPage.drawText(visaTypeInEnglish,{
    x: 252,
    y: 640,
    size: fontSize,
    font: CairoFont,
    color: textColor,
  })

  firstPage.drawText(visaPurposeInArabic,{
    x: 289,
    y: 620,
    size: fontSize,
    font: CairoFont,
    color: textColor,
  })

  firstPage.drawText(visaPurposeInEnglish,{
    x: 289,
    y: 605,
    size: fontSize,
    font: CairoFont,
    color: textColor,
  })

  firstPage.drawText(dateOfIssue,{
    x: 276,
    y: 585,
    size: fontSize,
    font: CairoFont,
    color: textColor,
  })

  firstPage.drawText(dateOfExpiry,{
    x: 276,
    y: 567,
    size: fontSize,
    font: CairoFont,
    color: textColor,
  })

  firstPage.drawText(placeOfIssue,{
    x: 241,
    y: 547,
    size: fontSize,
    font: CairoFont,
    color: textColor,
  })

  firstPage.drawText(holderFullNameInArabic,{
    x: 241,
    y: 492,
    size: fontSize,
    font: CairoFont,
    color: textColor,
  })

  firstPage.drawText(holderFullName,{
    x: 241,
    y: 476,
    size: fontSize,
    font: CairoFont,
    color: textColor,
  })

  firstPage.drawText(holderMOIReference,{
    x: 279,
    y: 456,
    size: fontSize,
    font: CairoFont,
    color: textColor,
  })

  firstPage.drawText(holderNationality,{
    x: 253,
    y: 436,
    size: fontSize,
    font: CairoFont,
    color: textColor,
  })

  firstPage.drawText(holderDateOfIssue,{
    x: 279,
    y: 417,
    size: fontSize,
    font: CairoFont,
    color: textColor,
  })

  firstPage.drawText(holderGender,{
    x: 279,
    y: 397,
    size: fontSize,
    font: CairoFont,
    color: textColor,
  })

  firstPage.drawText(holderOccupation,{
    x: 241,
    y: 377,
    size: fontSize,
    font: CairoFont,
    color: textColor,
  })

  firstPage.drawText(holderOccupationInArabic,{
    x: 292,
    y: 377,
    size: fontSize,
    font: CairoFont,
    color: textColor,
  })

  firstPage.drawText(holderDateOfBirth,{
    x: 279,
    y: 357,
    size: fontSize,
    font: CairoFont,
    color: textColor,
  })

  firstPage.drawText(holderPassportNo,{
    x: 279,
    y: 337,
    size: fontSize,
    font: CairoFont,
    color: textColor,
  })

  firstPage.drawText(holderPlaceOfIssue,{
    x: 279,
    y: 317,
    size: fontSize,
    font: CairoFont,
    color: textColor,
  })

  
  firstPage.drawText(holderPassportType,{
    x: 272,
    y: 297,
    size: fontSize,
    font: CairoFont,
    color: textColor,
  })

  firstPage.drawText(holderExpiryDate,{
    x: 279,
    y: 277,
    size: fontSize,
    font: CairoFont,
    color: textColor,
  })

  firstPage.drawText(employerFullName,{
    x: 241,
    y: 209,
    size: fontSize,
    font: CairoFont,
    color: textColor,
  })

  firstPage.drawText(employerFullNameinArabic,{
    x: 241,
    y: 194,
    size: fontSize,
    font: CairoFont,
    color: textColor,
  })

  firstPage.drawText(employerMOIReference,{
    x: 292,
    y: 173,
    size: fontSize,
    font: CairoFont,
    color: textColor,
  })

  firstPage.drawText(employerMobileNumber,{
    x: 280,
    y: 152,
    size: fontSize,
    font: CairoFont,
    color: textColor,
  })

   const uri = await pdfDoc.saveAsBase64({dataUri: true});


   let pdf = document.querySelector('#myPdf') as HTMLElement;

  //  pdf.setAttribute('src', uri)
      window.open(uri);

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
