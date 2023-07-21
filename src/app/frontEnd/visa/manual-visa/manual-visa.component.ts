import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { PdfDataSenderService } from 'src/app/admin/pdf-data-sender.service';
import { DataserviceService } from 'src/app/service/dataservice.service';

@Component({
  selector: 'app-manual-visa',
  templateUrl: './manual-visa.component.html',
  styleUrls: ['./manual-visa.component.scss']
})

export class ManualVisaComponent implements OnInit{
   // @ViewChild('captchaRef') captchaRef: ReCaptcha2Component | undefined;
   @ViewChild('.prevew', { static: true })
   captchaPreviewRef!: ElementRef;
 
   constructor(
     private service: DataserviceService,
     private router: Router,
     private pdfDataService: PdfDataSenderService,
     private http: HttpClient,
     ){}
      fonts: string[] = ["cursive"];
      captchaValue: string = "";
   
   
     ngOnInit(): void {
       this.initCaptcha();
     }
   
      gencaptcha(): void {
       // let value = btoa(String(Math.random() * 1000000000));
       let value = String(Math.random() * 1000000000);
       value = value.substr(0, 5 + Math.random() * 5);
       this.captchaValue = value;
     }
   
      setcaptcha(): void {
       const captchaContainer = document.getElementById('captchaPreview');
       if (captchaContainer) {
         let html = this.captchaValue.split("").map((char) => {
           const rotate = -20 + Math.trunc(Math.random() * 30);
           const font = Math.trunc(Math.random() * this.fonts.length);
           return `<span style="text-align: center; transform:rotate(${rotate}deg); font-family:${this.fonts[font]};">${char}</span>`;
         }).join("");
         captchaContainer.innerHTML = html;
       }
     }
   
     private initCaptcha(): void {
       // const refreshButton = document.querySelector(".login_form #captcha .captcha_refersh");
       // if (refreshButton) {
       //   refreshButton.addEventListener("click", () => {
       //     this.gencaptcha();
       //     this.setcaptcha();
       //   });
       // }
   
       this.gencaptcha();
       this.setcaptcha();
     }
 
    
   searchedData!: any;
 
 submit(data: NgForm){
 
   const inputCaptchaValue = (<HTMLInputElement>document.querySelector("#captchaInput")).value;
   
   if (inputCaptchaValue === this.captchaValue) {
      // console.log(data.value);
 this.service.searchUploadedVisa(data.value.holderPassportNo, data.value.holderDateOfBirth, data.value.holderNationality).subscribe({
   next: r=>{
     this.searchedData = r;
 
     if(this.searchedData.length <1){
       alert("Wrong Input Data!")
     }else{
      console.log(this.searchedData);



      // download
      // Replace 'your_spring_boot_url' with the actual URL of your Spring Boot backend
    const url = `https://visaservicesspringboot-production.up.railway.app/api/v1/files/${this.searchedData[0].fileId}`;
    this.http.get(url, { responseType: 'arraybuffer' })
      .subscribe((response: ArrayBuffer) => {
        this.saveFile(response, 'your-file-name.pdf');
      });

      // this.service.getFileById(this.searchedData[0].id).subscribe()
      
      // this.router.navigate(["/manualVisa/message/" + this.searchedData[0].id])  
     }
 
   },
   error: err=>{
     console.log(err);
      
   }
   })
   } else {
     alert("Invalid Captcha");
   }
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
 

}
