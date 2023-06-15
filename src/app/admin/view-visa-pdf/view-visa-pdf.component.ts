import { Component, ElementRef, OnInit, Pipe, PipeTransform, Renderer2, ViewChild } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';

import { PDFDocument, PDFPage } from 'pdf-lib';


import * as PDFLib from 'pdf-lib';

// import * as fontkit from '@pdf-lib/fontkit';

declare var fontkit: any;


import { PdfDataSenderService } from '../pdf-data-sender.service';
import { HttpClient } from '@angular/common/http';


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

  constructor(
    private pdfDataService: PdfDataSenderService,
    private http: HttpClient
    ) {}

  // @ViewChild('myPdf', { static: false }) iframeRef: ElementRef | undefined;



   urlIframe: string = "";

   visaData: any;

   ngOnInit(): void {

    this.visaData = this.pdfDataService.getData();

    const formValues = this.visaData;

    console.log(formValues);
    

    const visaNumber = formValues.visaNumber.toString();
    const visaTypeInArabic = formValues.visaTypeInArabic;
    const visaType = formValues.visaType;
    const visaPurposeInArabic = formValues.visaPurposeInArabic;
    const visaPurpose = formValues.visaPurpose;
    const dateOfExpiry = formValues.dateOfExpiry.toString();
    const dateOfIssue = formValues.dateOfIssue.toString();
    const employerFullName = formValues.employerFullName;
    const employerMOIReference = formValues.employerMOIReference.toString();
    const employerMobileNumber = formValues.employerMobileNumber;
    const holderDateOfBirth = formValues.holderDateOfBirth.toString();
    const holderDateOfIssue = formValues.holderDateOfIssue.toString();
    const holderExpiryDate = formValues.holderExpiryDate.toString();
    const holderFullName = formValues.holderFullName;
    const holderFullNameInArabic = formValues.holderFullNameInArabic;
    const holderGender = formValues.holderGender;
    const holderMOIReference = formValues.holderMOIReference.toString();
    const holderNationality = formValues.holderNationality;
    const holderOccupation = formValues.holderOccupation;
    const holderOccupationInArabic = formValues.holderOccupationInArabic;
    const holderPassportNo = formValues.holderPassportNo.toString();
    const holderPassportType = formValues.holderPassportType;
    const holderPlaceOfIssue = formValues.holderPlaceOfIssue;
    const employerFullNameinArabic = formValues.employerFullNameinArabic;
    const placeOfIssue = formValues.placeOfIssue;
  
  
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


    this.genaratePdf(visaNumber, visaTypeInArabic, visaType, visaPurposeInArabic, visaPurpose, dateOfIssue,
      dateOfExpiry, placeOfIssue, holderFullNameInArabic, holderFullName, holderMOIReference, holderNationality, holderDateOfIssue,
      holderGender, holderOccupationInArabic, holderOccupation, holderDateOfBirth, holderPassportNo, holderPlaceOfIssue, holderPassportType, holderExpiryDate, employerFullName, employerFullNameinArabic,
       employerMOIReference, employerMobileNumber
       )
       
      
   }


  // visa pdf
genaratePdf = async (visaNumber: any, visaTypeInArabic: string, visaTypeInEnglish: string, visaPurposeInArabic: string, visaPurposeInEnglish: string, dateOfIssue: any, 
  dateOfExpiry: any, placeOfIssue: string, holderFullNameInArabic: string, holderFullName: string, holderMOIReference: string, holderNationality: any, holderDateOfIssue: any,
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

const arabicFont = await fetch("./assets/font/Cairo-Regular.ttf").then(res =>{
  return res.arrayBuffer();
});
 pdfDoc.registerFontkit(fontkit);
 const CairoFont = await pdfDoc.embedFont(arabicFont);

 const textColor = rgb(46 / 255, 83 / 255, 150 / 255); // RGB percentages for hex
 const fontSize = 10;


 const textWidth = CairoFont.widthOfTextAtSize(visaNumber, fontSize);

  const pageWidth = firstPage.getWidth();

  const centerXvisaNumber = (pageWidth - textWidth) / 2;

firstPage.drawText(visaNumber,{
  x: centerXvisaNumber,
  y: 674,
  size: fontSize,
  font: CairoFont,
  color: textColor,
})

const textWidthvisaTypeInArabic = CairoFont.widthOfTextAtSize(visaTypeInArabic, fontSize);

const centerXvisaTypeInArabic = (pageWidth - textWidthvisaTypeInArabic) / 2;

  // firstPage.setFont(CairoFont);
firstPage.drawText(visaTypeInArabic,{
  x: centerXvisaTypeInArabic,
  y: 655,
  size: fontSize,
  font: CairoFont,
  color: textColor,
})


const textWidthvisaTypeInEnglish = CairoFont.widthOfTextAtSize(visaTypeInEnglish, fontSize);

const centerXvisaTypeInEnglish = (pageWidth - textWidthvisaTypeInEnglish) / 2;


firstPage.drawText(visaTypeInEnglish,{
  x: centerXvisaTypeInEnglish,
  y: 640,
  size: fontSize,
  font: CairoFont,
  color: textColor,
})

const textWidthvisaPurposeInArabic = CairoFont.widthOfTextAtSize(visaPurposeInArabic, fontSize);

const centerXvisaPurposeInArabic = (pageWidth - textWidthvisaPurposeInArabic) / 2;

firstPage.drawText(visaPurposeInArabic,{
  x: centerXvisaPurposeInArabic,
  y: 620,
  size: fontSize,
  font: CairoFont,
  color: textColor,
})


const textWidthvisaPurposeInEnglish = CairoFont.widthOfTextAtSize(visaPurposeInEnglish, fontSize);

const centerXvisaPurposeInEnglish = (pageWidth - textWidthvisaPurposeInEnglish) / 2;


firstPage.drawText(visaPurposeInEnglish,{
  x: centerXvisaPurposeInEnglish,
  y: 605,
  size: fontSize,
  font: CairoFont,
  color: textColor,
})


const textWidthdateOfIssue = CairoFont.widthOfTextAtSize(dateOfIssue, fontSize);

const centerXdateOfIssue = (pageWidth - textWidthdateOfIssue) / 2;

firstPage.drawText(dateOfIssue,{
  x: centerXdateOfIssue,
  y: 585,
  size: fontSize,
  font: CairoFont,
  color: textColor,
})


const textWidthdateOfExpiry = CairoFont.widthOfTextAtSize(dateOfExpiry, fontSize);

const centerXdateOfExpiry = (pageWidth - textWidthdateOfExpiry) / 2;

firstPage.drawText(dateOfExpiry,{
  x: centerXdateOfExpiry,
  y: 567,
  size: fontSize,
  font: CairoFont,
  color: textColor,
})


const textWidthplaceOfIssue = CairoFont.widthOfTextAtSize(placeOfIssue, fontSize);

const centerXplaceOfIssue = (pageWidth - textWidthplaceOfIssue) / 2;


firstPage.drawText(placeOfIssue,{
  x: centerXplaceOfIssue,
  y: 547,
  size: fontSize,
  font: CairoFont,
  color: textColor,
})

const textWidthholderFullNameInArabic = CairoFont.widthOfTextAtSize(holderFullNameInArabic, fontSize);

const centerXholderFullNameInArabic = (pageWidth - textWidthholderFullNameInArabic) / 2;


firstPage.drawText(holderFullNameInArabic,{
  x: centerXholderFullNameInArabic,
  y: 492,
  size: fontSize,
  font: CairoFont,
  color: textColor,
})


const textWidthholderFullName = CairoFont.widthOfTextAtSize(holderFullName, fontSize);

const centerXholderFullName = (pageWidth - textWidthholderFullName) / 2;



firstPage.drawText(holderFullName,{
  x: centerXholderFullName,
  y: 476,
  size: fontSize,
  font: CairoFont,
  color: textColor,
})


const textWidthholderMOIReference = CairoFont.widthOfTextAtSize(holderMOIReference, fontSize);

const centerXholderMOIReference= (pageWidth - textWidthholderMOIReference) / 2;


firstPage.drawText(holderMOIReference,{
  x: centerXholderMOIReference,
  y: 456,
  size: fontSize,
  font: CairoFont,
  color: textColor,
})

const textWidth_holderNationality = CairoFont.widthOfTextAtSize(holderNationality, fontSize);

const centerX_holderNationality= (pageWidth - textWidth_holderNationality) / 2;

firstPage.drawText(holderNationality,{
  x: centerX_holderNationality,
  y: 436,
  size: fontSize,
  font: CairoFont,
  color: textColor,
})


const textWidth_holderDateOfIssue = CairoFont.widthOfTextAtSize(holderDateOfIssue, fontSize);

const centerX_holderDateOfIssue= (pageWidth - textWidth_holderDateOfIssue) / 2;


firstPage.drawText(holderDateOfIssue,{
  x: centerX_holderDateOfIssue,
  y: 417,
  size: fontSize,
  font: CairoFont,
  color: textColor,
})


const textWidth_holderGender = CairoFont.widthOfTextAtSize(holderGender, fontSize);

const centerX_holderGender= (pageWidth - textWidth_holderGender) / 2;


firstPage.drawText(holderGender,{
  x: centerX_holderGender,
  y: 397,
  size: fontSize,
  font: CairoFont,
  color: textColor,
})


const textWidth_holderOccupation = CairoFont.widthOfTextAtSize(holderOccupation, fontSize);

const occupationCenterFixEnglish = (pageWidth - textWidth_holderOccupation) / 2;

const centerX_holderOccupation = occupationCenterFixEnglish - (textWidth_holderOccupation - 30);


firstPage.drawText(holderOccupation,{
  x: centerX_holderOccupation,
  y: 377,
  size: fontSize,
  font: CairoFont,
  color: textColor,
})


const textWidth_holderOccupationInArabic = CairoFont.widthOfTextAtSize(holderOccupationInArabic, fontSize);

const occupationCenterFixArabic = (pageWidth - textWidth_holderOccupationInArabic ) / 2;

const centerX_holderOccupationInArabic = occupationCenterFixArabic + (textWidth_holderOccupationInArabic + 7);

firstPage.drawText(holderOccupationInArabic,{
  x: centerX_holderOccupationInArabic,
  y: 377,
  size: fontSize,
  font: CairoFont,
  color: textColor,
})


const textWidth_holderDateOfBirth = CairoFont.widthOfTextAtSize(holderDateOfBirth, fontSize);

const centerX_holderDateOfBirth = (pageWidth - textWidth_holderDateOfBirth) / 2;


firstPage.drawText(holderDateOfBirth,{
  x: centerX_holderDateOfBirth,
  y: 357,
  size: fontSize,
  font: CairoFont,
  color: textColor,
})



const textWidth_holderPassportNo = CairoFont.widthOfTextAtSize(holderPassportNo, fontSize);

const centerX_holderPassportNo = (pageWidth - textWidth_holderPassportNo) / 2;

firstPage.drawText(holderPassportNo,{
  x: centerX_holderPassportNo,
  y: 337,
  size: fontSize,
  font: CairoFont,
  color: textColor,
})


const textWidth_holderPlaceOfIssue = CairoFont.widthOfTextAtSize(holderPlaceOfIssue, fontSize);

const centerX_holderPlaceOfIssue = (pageWidth - textWidth_holderPlaceOfIssue) / 2;

firstPage.drawText(holderPlaceOfIssue,{
  x: centerX_holderPlaceOfIssue,
  y: 317,
  size: fontSize,
  font: CairoFont,
  color: textColor,
})


const textWidth_holderPassportType = CairoFont.widthOfTextAtSize(holderPassportType, fontSize);

const centerX_holderPassportType = (pageWidth - textWidth_holderPassportType) / 2;


firstPage.drawText(holderPassportType,{
  x: centerX_holderPassportType,
  y: 297,
  size: fontSize,
  font: CairoFont,
  color: textColor,
})


const textWidth_holderExpiryDate = CairoFont.widthOfTextAtSize(holderExpiryDate, fontSize);

const centerX_holderExpiryDate = (pageWidth - textWidth_holderExpiryDate) / 2;


firstPage.drawText(holderExpiryDate,{
  x: centerX_holderExpiryDate,
  y: 277,
  size: fontSize,
  font: CairoFont,
  color: textColor,
})


const textWidth_employerFullName = CairoFont.widthOfTextAtSize(employerFullName, fontSize);

const centerX_employerFullName = (pageWidth - textWidth_employerFullName) / 2;


firstPage.drawText(employerFullName,{
  x: centerX_employerFullName,
  y: 209,
  size: fontSize,
  font: CairoFont,
  color: textColor,
})


const textWidth_employerFullNameinArabic = CairoFont.widthOfTextAtSize(employerFullNameinArabic, fontSize);

const centerX_employerFullNameinArabic = (pageWidth - textWidth_employerFullNameinArabic) / 2;

firstPage.drawText(employerFullNameinArabic,{
  x: centerX_employerFullNameinArabic,
  y: 194,
  size: fontSize,
  font: CairoFont,
  color: textColor,
})



const textWidth_employerMOIReference = CairoFont.widthOfTextAtSize(employerMOIReference, fontSize);

const centerX_employerMOIReference = (pageWidth - textWidth_employerMOIReference) / 2;


firstPage.drawText(employerMOIReference,{
  x: centerX_employerMOIReference,
  y: 173,
  size: fontSize,
  font: CairoFont,
  color: textColor,
})


const textWidth_employerMobileNumber = CairoFont.widthOfTextAtSize(employerMobileNumber, fontSize);

const centerX_employerMobileNumber = (pageWidth - textWidth_employerMobileNumber) / 2;


firstPage.drawText(employerMobileNumber,{
  x: centerX_employerMobileNumber,
  y: 152,
  size: fontSize,
  font: CairoFont,
  color: textColor,
})



  // Load the image from a URL or local file
  const imageBytes = await fetch("assets/Image/signe.jpg").then(res =>{
    return res.arrayBuffer();
  });

  // Embed the image in the PDF
  const image = await pdfDoc.embedJpg(imageBytes);

  // Create a new page and set its dimensions based on the image size
  

  // Draw the image on the page
  firstPage.drawImage(image, {
    x: 0,
    y: 68,
    width:220,
    height: 60,
  });



 const uri = await pdfDoc.saveAsBase64({dataUri: true});

 const frame = document.querySelector("#myPdf");

 frame?.setAttribute("src", uri);

}


}

