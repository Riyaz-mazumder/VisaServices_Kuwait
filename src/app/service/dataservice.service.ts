import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor(private http: HttpClient) { }

  
  private baseUrl = "http://localhost:8080/api/v1/visa"

  public searchVisa(holderPassportNo: string, holderDateOfBirth: string, holderNationality: string){
   return this.http.get(this.baseUrl + "/" + holderPassportNo + "/" + holderDateOfBirth + "/" + holderNationality);
  }

  public getQrCode(qrPath:string){
     return this.http.get("http://localhost:8080/api/v1" + "/qrCode/" + qrPath);
  }

}
