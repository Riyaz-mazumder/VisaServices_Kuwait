import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor(private http: HttpClient) { }

  
  // private baseUrl = "http://localhost:8080/api/v1/visa"

  private baseUrl = "https://visaservicesspringboot-production.up.railway.app/api/v1/visa"

  public searchVisa(holderPassportNo: string, holderDateOfBirth: string, holderNationality: string){
   return this.http.get(this.baseUrl + "/" + holderPassportNo + "/" + holderDateOfBirth + "/" + holderNationality);
  }

  public getQrCode(qrPath:string){
     return this.http.get("http://localhost:8080/api/v1" + "/qrCode/" + qrPath);
  }

  async fetchImage(qrPath: any): Promise<Uint8Array> {
    const url = "http://localhost:8080/api/v1" + "/qrCode/" + qrPath;
    const response = await this.http.get(url, { responseType: 'arraybuffer' }).toPromise();
    return new Uint8Array(response as ArrayBuffer);
  }

  private manualvisaUpload = "https://visaservicesspringboot-production.up.railway.app/api/v1/uploadVisa"


  public searchUploadedVisa(holderPassportNo: string, holderDateOfBirth: string, holderNationality: string){
    return this.http.get(this.manualvisaUpload + "/" + holderPassportNo + "/" + holderDateOfBirth + "/" + holderNationality);
   }

   private fileUrl = "https://visaservicesspringboot-production.up.railway.app/api/v1/files";

   public getFileById(id: any){
      return this.http.get(this.fileUrl + "/" + id);
   }

}
