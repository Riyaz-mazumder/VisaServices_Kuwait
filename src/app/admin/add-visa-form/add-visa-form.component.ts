
import { Component, ElementRef, OnInit, Pipe, PipeTransform, Renderer2, ViewChild } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';

import { PDFDocument} from 'pdf-lib'

import * as PDFLib from 'pdf-lib';
import { NgForm } from '@angular/forms';

import { HttpClient } from '@angular/common/http';

import { PdfDataSenderService } from '../pdf-data-sender.service';


declare var fontkit: any;


// import * as fontkit from '@pdf-lib/fontkit';



@Component({
  selector: 'app-add-visa-form',
  templateUrl: './add-visa-form.component.html',
  styleUrls: ['./add-visa-form.component.scss']
})
export class AddVisaFormComponent implements OnInit{


  constructor(
    private httpClient: HttpClient,
    private pdfDataService: PdfDataSenderService,
    
    ) {}

  storedValue!: any;
  ngOnInit(): void {
    this.storedValue = sessionStorage.getItem('admin');
  }

  submit(d: NgForm) {

    this.pdfDataService.setData(d.value);

    const formValues = d.value;
  
    const visaNumber = formValues.visaNumber.toString();
    const visaTypeInArabic = formValues.visaTypeInArabic;
    const visaType = formValues.visaType;
    const visaPurposeInArabic = formValues.visaPurposeInArabic;
    const visaPurpose = formValues.visaPurpose;
    const dateOfExpiry = formValues.dateOfExpiry.toString();
    const dateOfIssue = formValues.dateOfIssue.toString();
    const employerFullName = formValues.employerFullName;
    const employerMOIReference = formValues.employerMOIReference.toString();
    const employerMobileNumber = formValues.employerMobileNumber.toString();
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
    // console.log('placeOfIssue:', placeOfIssue);
  
    d.reset();


    this.genaratePdf(visaNumber, visaTypeInArabic, visaType, visaPurposeInArabic, visaPurpose, dateOfIssue,
   dateOfExpiry, placeOfIssue, holderFullNameInArabic, holderFullName, holderMOIReference, holderNationality, holderDateOfIssue,
   holderGender, holderOccupationInArabic, holderOccupation, holderDateOfBirth, holderPassportNo, holderPlaceOfIssue, holderPassportType, holderExpiryDate, employerFullName, employerFullNameinArabic,
    employerMOIReference, employerMobileNumber
    )
    
    
  }


  
  selectedCountry!: string;
  countries: { name: string, arabic: string }[] = [
    { name: 'Afghanistan', arabic: 'أفغانستان' },
    { name: 'Albania', arabic: 'ألبانيا' },
    { name: 'Algeria', arabic: 'الجزائر' },
    { name: 'Andorra', arabic: 'أندورا' },
    { name: 'Angola', arabic: 'أنغولا' },
    { name: 'Antigua and Barbuda', arabic: 'أنتيغوا وبربودا' },
    { name: 'Argentina', arabic: 'الأرجنتين' },
    { name: 'Armenia', arabic: 'أرمينيا' },
    { name: 'Australia', arabic: 'أستراليا' },
    { name: 'Austria', arabic: 'النمسا' },
    { name: 'Azerbaijan', arabic: 'أذربيجان' },
    { name: 'Bahamas', arabic: 'الباهاما' },
    { name: 'Bahrain', arabic: 'البحرين' },
    { name: 'Bangladesh', arabic: 'بنغلاديش' },
    { name: 'Barbados', arabic: 'بربادوس' },
    { name: 'Belarus', arabic: 'روسيا البيضاء' },
    { name: 'Belgium', arabic: 'بلجيكا' },
    { name: 'Belize', arabic: 'بليز' },
    { name: 'Benin', arabic: 'بنين' },
    { name: 'Bhutan', arabic: 'بوتان' },
    { name: 'Bolivia', arabic: 'بوليفيا' },
    { name: 'Bosnia and Herzegovina', arabic: 'البوسنة والهرسك' },
    { name: 'Botswana', arabic: 'بوتسوانا' },
    { name: 'Brazil', arabic: 'البرازيل' },
    { name: 'Brunei', arabic: 'بروناي' },
    { name: 'Bulgaria', arabic: 'بلغاريا' },
    { name: 'Burkina Faso', arabic: 'بوركينا فاسو' },
    { name: 'Burundi', arabic: 'بوروندي' },
    { name: 'Cabo Verde', arabic: 'الرأس الأخضر' },
    { name: 'Cambodia', arabic: 'كمبوديا' },
    { name: 'Cameroon', arabic: 'الكاميرون' },
    { name: 'Canada', arabic: 'كندا' },
    { name: 'Central African Republic', arabic: 'جمهورية أفريقيا الوسطى' },
    { name: 'Chad', arabic: 'تشاد' },
    { name: 'Chile', arabic: 'شيلي' },
    { name: 'China', arabic: 'الصين' },
    { name: 'Colombia', arabic: 'كولومبيا' },
    { name: 'Comoros', arabic: 'جزر القمر' },
    { name: 'Congo', arabic: 'الكونغو' },
    { name: 'Costa Rica', arabic: 'كوستاريكا' },
    { name: 'Croatia', arabic: 'كرواتيا' },
    { name: 'Cuba', arabic: 'كوبا' },
    { name: 'Cyprus', arabic: 'قبرص' },
    { name: 'Czechia', arabic: 'التشيك' },
    { name: 'Denmark', arabic: 'الدنمارك' },
    { name: 'Djibouti', arabic: 'جيبوتي' },
    { name: 'Dominica', arabic: 'دومينيكا' },
    { name: 'Dominican Republic', arabic: 'جمهورية الدومينيكان' },
    { name: 'East Timor', arabic: 'تيمور الشرقية' },
    { name: 'Ecuador', arabic: 'الإكوادور' },
    { name: 'Egypt', arabic: 'مصر' },
    { name: 'El Salvador', arabic: 'السلفادور' },
    { name: 'Equatorial Guinea', arabic: 'غينيا الاستوائية' },
    { name: 'Eritrea', arabic: 'إريتريا' },
    { name: 'Estonia', arabic: 'استونيا' },
    { name: 'Eswatini', arabic: 'إسواتيني' },
    { name: 'Ethiopia', arabic: 'إثيوبيا' },
    { name: 'Fiji', arabic: 'فيجي' },
    { name: 'Finland', arabic: 'فنلندا' },
    { name: 'France', arabic: 'فرنسا' },
    { name: 'Gabon', arabic: 'الغابون' },
    { name: 'Gambia', arabic: 'غامبيا' },
    { name: 'Georgia', arabic: 'جورجيا' },
    { name: 'Germany', arabic: 'ألمانيا' },
    { name: 'Ghana', arabic: 'غانا' },
    { name: 'Greece', arabic: 'اليونان' },
    { name: 'Grenada', arabic: 'غرينادا' },
    { name: 'Guatemala', arabic: 'غواتيمالا' },
    { name: 'Guinea', arabic: 'غينيا' },
    { name: 'Guinea-Bissau', arabic: 'غينيا بيساو' },
    { name: 'Guyana', arabic: 'غيانا' },
    { name: 'Haiti', arabic: 'هايتي' },
    { name: 'Honduras', arabic: 'هندوراس' },
    { name: 'Hungary', arabic: 'المجر' },
    { name: 'Iceland', arabic: 'آيسلندا' },
    { name: 'India', arabic: 'الهند' },
    { name: 'Indonesia', arabic: 'إندونيسيا' },
    { name: 'Iran', arabic: 'إيران' },
    { name: 'Iraq', arabic: 'العراق' },
    { name: 'Ireland', arabic: 'أيرلندا' },
    { name: 'Israel', arabic: 'إسرائيل' },
    { name: 'Italy', arabic: 'إيطاليا' },
    { name: 'Jamaica', arabic: 'جامايكا' },
    { name: 'Japan', arabic: 'اليابان' },
    { name: 'Jordan', arabic: 'الأردن' },
    { name: 'Kazakhstan', arabic: 'كازاخستان' },
    { name: 'Kenya', arabic: 'كينيا' },
    { name: 'Kiribati', arabic: 'كيريباتي' },
    { name: 'Korea, North', arabic: 'كوريا الشمالية' },
    { name: 'Korea, South', arabic: 'كوريا الجنوبية' },
    { name: 'Kosovo', arabic: 'كوسوفو' },
    { name: 'Kuwait', arabic: 'الكويت' },
    { name: 'Kyrgyzstan', arabic: 'قيرغيزستان' },
    { name: 'Laos', arabic: 'لاوس' },
    { name: 'Latvia', arabic: 'لاتفيا' },
    { name: 'Lebanon', arabic: 'لبنان' },
    { name: 'Lesotho', arabic: 'ليسوتو' },
    { name: 'Liberia', arabic: 'ليبيريا' },
    { name: 'Libya', arabic: 'ليبيا' },
    { name: 'Liechtenstein', arabic: 'ليختنشتاين' },
    { name: 'Lithuania', arabic: 'ليتوانيا' },
    { name: 'Luxembourg', arabic: 'لوكسمبورغ' },
    { name: 'Madagascar', arabic: 'مدغشقر' },
    { name: 'Malawi', arabic: 'ملاوي' },
    { name: 'Malaysia', arabic: 'ماليزيا' },
    { name: 'Maldives', arabic: 'المالديف' },
    { name: 'Mali', arabic: 'مالي' },
    { name: 'Malta', arabic: 'مالطا' },
    { name: 'Marshall Islands', arabic: 'جزر مارشال' },
    { name: 'Mauritania', arabic: 'موريتانيا' },
    { name: 'Mauritius', arabic: 'موريشيوس' },
    { name: 'Mexico', arabic: 'المكسيك' },
    { name: 'Micronesia', arabic: 'ميكرونيزيا' },
    { name: 'Moldova', arabic: 'مولدوفا' },
    { name: 'Monaco', arabic: 'موناكو' },
    { name: 'Mongolia', arabic: 'منغوليا' },
    { name: 'Montenegro', arabic: 'الجبل الأسود' },
    { name: 'Morocco', arabic: 'المغرب' },
    { name: 'Mozambique', arabic: 'موزمبيق' },
    { name: 'Myanmar', arabic: 'ميانمار' },
    { name: 'Namibia', arabic: 'ناميبيا' },
    { name: 'Nauru', arabic: 'ناورو' },
    { name: 'Nepal', arabic: 'نيبال' },
    { name: 'Netherlands', arabic: 'هولندا' },
    { name: 'New Zealand', arabic: 'نيوزيلندا' },
    { name: 'Nicaragua', arabic: 'نيكاراغوا' },
    { name: 'Niger', arabic: 'النيجر' },
    { name: 'Nigeria', arabic: 'نيجيريا' },
    { name: 'North Macedonia', arabic: 'مقدونيا الشمالية' },
    { name: 'Norway', arabic: 'النرويج' },
    { name: 'Oman', arabic: 'عمان' },
    { name: 'Pakistan', arabic: 'باكستان' },
    { name: 'Palau', arabic: 'بالاو' },
    { name: 'Palestine', arabic: 'فلسطين' },
    { name: 'Panama', arabic: 'بنما' },
    { name: 'Papua New Guinea', arabic: 'بابوا غينيا الجديدة' },
    { name: 'Paraguay', arabic: 'باراغواي' },
    { name: 'Peru', arabic: 'بيرو' },
    { name: 'Philippines', arabic: 'الفلبين' },
    { name: 'Poland', arabic: 'بولندا' },
    { name: 'Portugal', arabic: 'البرتغال' },
    { name: 'Qatar', arabic: 'قطر' },
    { name: 'Romania', arabic: 'رومانيا' },
    { name: 'Russia', arabic: 'روسيا' },
    { name: 'Rwanda', arabic: 'رواندا' },
    { name: 'Saint Kitts and Nevis', arabic: 'سانت كيتس ونيفيس' },
    { name: 'Saint Lucia', arabic: 'سانت لوسيا' },
    { name: 'Saint Vincent and the Grenadines', arabic: 'سانت فنسنت والغرينادين' },
    { name: 'Samoa', arabic: 'ساموا' },
    { name: 'San Marino', arabic: 'سان مارينو' },
    { name: 'Sao Tome and Principe', arabic: 'ساو تومي وبرينسيبي' },
    { name: 'Saudi Arabia', arabic: 'المملكة العربية السعودية' },
    { name: 'Senegal', arabic: 'السنغال' },
    { name: 'Serbia', arabic: 'صربيا' },
    { name: 'Seychelles', arabic: 'سيشيل' },
    { name: 'Sierra Leone', arabic: 'سيراليون' },
    { name: 'Singapore', arabic: 'سنغافورة' },
    { name: 'Slovakia', arabic: 'سلوفاكيا' },
    { name: 'Slovenia', arabic: 'سلوفينيا' },
    { name: 'Solomon Islands', arabic: 'جزر سليمان' },
    { name: 'Somalia', arabic: 'الصومال' },
    { name: 'South Africa', arabic: 'جنوب أفريقيا' },
    { name: 'South Sudan', arabic: 'جنوب السودان' },
    { name: 'Spain', arabic: 'إسبانيا' },
    { name: 'Sri Lanka', arabic: 'سريلانكا' },
    { name: 'Sudan', arabic: 'السودان' },
    { name: 'Suriname', arabic: 'سورينام' },
    { name: 'Sweden', arabic: 'السويد' },
    { name: 'Switzerland', arabic: 'سويسرا' },
    { name: 'Syria', arabic: 'سوريا' },
    { name: 'Taiwan', arabic: 'تايوان' },
    { name: 'Tajikistan', arabic: 'طاجيكستان' },
    { name: 'Tanzania', arabic: 'تنزانيا' },
    { name: 'Thailand', arabic: 'تايلاند' },
    { name: 'Togo', arabic: 'توغو' },
    { name: 'Tonga', arabic: 'تونغا' },
    { name: 'Trinidad and Tobago', arabic: 'ترينيداد وتوباغو' },
    { name: 'Tunisia', arabic: 'تونس' },
    { name: 'Turkey', arabic: 'تركيا' },
    { name: 'Turkmenistan', arabic: 'تركمانستان' },
    { name: 'Tuvalu', arabic: 'توفالو' },
    { name: 'Uganda', arabic: 'أوغندا' },
    { name: 'Ukraine', arabic: 'أوكرانيا' },
    { name: 'United Arab Emirates', arabic: 'الإمارات العربية المتحدة' },
    { name: 'United Kingdom', arabic: 'المملكة المتحدة' },
    { name: 'United States', arabic: 'الولايات المتحدة الأمريكية' },
    { name: 'Uruguay', arabic: 'أوروغواي' },
    { name: 'Uzbekistan', arabic: 'أوزبكستان' },
    { name: 'Vanuatu', arabic: 'فانواتو' },
    { name: 'Vatican City', arabic: 'الفاتيكان' },
    { name: 'Venezuela', arabic: 'فنزويلا' },
    { name: 'Vietnam', arabic: 'فيتنام' },
    { name: 'Yemen', arabic: 'اليمن' },
    { name: 'Zambia', arabic: 'زامبيا' },
    { name: 'Zimbabwe', arabic: 'زيمبابوي' }
  ];


  selectedGender!: string;
  genders: string[] = ['Male', 'Female', 'Other'];
  genderTranslations: { [key: string]: string } = {
    Male: 'ذكر',
    Female: 'أنثى',
    Other: 'أخرى'
  };


  selectedCountryInArabic!: string;
  countriesInArabic: string[] = [
  'أفغانستان',
  'ألبانيا',
  'الجزائر',
  'أندورا',
  'أنغولا',
  'أنتيغوا وبربودا',
  'الأرجنتين',
  'أرمينيا',
  'أستراليا',
  'النمسا',
  'أذربيجان',
  'باهاماس',
  'البحرين',
  'بنجلاديش',
  'باربادوس',
  'بيلاروس',
  'بلجيكا',
  'بليز',
  'بنين',
  'بوتان',
  'بوليفيا',
  'البوسنة والهرسك',
  'بوتسوانا',
  'البرازيل',
  'بروناي',
  'بلغاريا',
  'بوركينا فاسو',
  'بوروندي',
  'كمبوديا',
  'الكاميرون',
  'كندا',
  'الرأس الأخضر',
  'أفريقيا الوسطى',
  'تشاد',
  'شيلي',
  'الصين',
  'كولومبيا',
  'جزر القمر',
  'الكونغو',
  'كوستاريكا',
  'كرواتيا',
  'كوبا',
  'قبرص',
  'جمهورية التشيك',
  'الدانمارك',
  'جيبوتي',
  'دومينيكا',
  'جمهورية الدومينيكان',
  'تيمور الشرقية',
  'الإكوادور',
  'مصر',
  'السلفادور',
  'غينيا الاستوائية',
  'إريتريا',
  'إستونيا',
  'إثيوبيا',
  'فيجي',
  'فنلندا',
  'فرنسا',
  'الغابون',
  'غامبيا',
  'جورجيا',
  'ألمانيا',
  'غانا',
  'اليونان',
  'جرينادا',
  'غواتيمالا',
  'غينيا',
  'غينيا بيساو',
  'غيانا',
  'هايتي',
  'هندوراس',
  'المجر',
  'أيسلندا',
  'الهند',
  'إندونيسيا',
  'إيران',
  'العراق',
  'أيرلندا',
  'إسرائيل',
  'إيطاليا',
  'جامايكا',
  'اليابان',
  'الأردن',
  'كازاخستان',
  'كينيا',
  'كيريباتي',
  'كوريا الشمالية',
  'كوريا الجنوبية',
  'الكويت',
  'قرغيزستان',
  'لاوس',
  'لاتفيا',
  'لبنان',
  'ليسوتو',
  'ليبيريا',
  'ليبيا',
  'ليختنشتاين',
  'ليتوانيا',
  'لوكسمبورج',
  'مدغشقر',
  'مالاوي',
  'ماليزيا',
  'جزر المالديف',
  'مالي',
  'مالطا',
  'جزر مارشال',
  'موريتانيا',
  'موريشيوس',
  'المكسيك',
  'مايكرونيزيا',
  'مولدوفا',
  'موناكو',
  'منغوليا',
  'الجبل الأسود',
  'المغرب',
  'موزمبيق',
  'ميانمار',
  'ناميبيا',
  'ناورو',
  'نيبال',
  'هولندا',
  'نيوزيلندا',
  'نيكاراغوا',
  'النيجر',
  'نيجيريا',
  'جزر النرويج',
  'سلطنة عمان',
  'باكستان',
  'بالاو',
  'بنما',
  'بابوا غينيا الجديدة',
  'باراغواي',
  'بيرو',
  'الفلبين',
  'بولندا',
  'البرتغال',
  'قطر',
  'رومانيا',
  'روسيا',
  'رواندا',
  'سانت كيتس ونيفيس',
  'سانت لوسيا',
  'سانت فينسنت والغرينادين',
  'ساموا',
  'سان مارينو',
  'ساو تومي وبرينسيبي',
  'المملكة العربية السعودية',
  'السنغال',
  'صربيا',
  'سيشيل',
  'سيراليون',
  'سنغافورة',
  'سلوفاكيا',
  'سلوفينيا',
  'جزر سليمان',
  'الصومال',
  'جنوب أفريقيا',
  'جنوب السودان',
  'إسبانيا',
  'سريلانكا',
  'السودان',
  'سوريا',
  'تايوان',
  'طاجيكستان',
  'تنزانيا',
  'تايلاند',
  'توغو',
  'تونغا',
  'ترينيداد وتوباغو',
  'تونس',
  'تركيا',
  'تركمانستان',
  'توفالو',
  'أوغندا',
  'أوكرانيا',
  'الإمارات العربية المتحدة',
  'المملكة المتحدة',
  'الولايات المتحدة الأمريكية',
  'أوروغواي',
  'أوزبكستان',
  'فانواتو',
  'الفاتيكان',
  'فنزويلا',
  'فيتنام',
  'اليمن',
  'زامبيا',
  'زيمبابوي'
];


selectedStatus!: string;
statuses: string[] = ['Diplomatic', 'Official', 'Normal'];
statusTranslations: { [key: string]: string } = {
  Diplomatic: 'دبلوماسي',
  Official: 'رسمي',
  Normal: 'عادي'
};



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

const arabicFont = await fetch("./assets/font/Cairo-ExtraBold.ttf").then(res =>{
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

const centerX_holderOccupation = (pageWidth - textWidth_holderOccupation) / 2;


firstPage.drawText(holderOccupation,{
  x: centerX_holderOccupation,
  y: 377,
  size: fontSize,
  font: CairoFont,
  color: textColor,
})


const textWidth_holderOccupationInArabic = CairoFont.widthOfTextAtSize(holderOccupationInArabic, fontSize);

const centerX_holderOccupationInArabic = (pageWidth - textWidth_holderOccupationInArabic) / 2;

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

 const uri = await pdfDoc.saveAsBase64({dataUri: true});

 alert('Visa Has Been Added');

window.open(uri, "_blank");


}


}
