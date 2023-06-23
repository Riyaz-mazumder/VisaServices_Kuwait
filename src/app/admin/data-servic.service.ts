import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServicService {

  constructor(private http: HttpClient) { }


  private baseUrl = "http://localhost:8080/api/v1/visa"

  public getAllVisa(){
   return this.http.get(this.baseUrl);
  }

  public getVisaById(id: number){
    return this.http.get(this.baseUrl + "/" + id);
  }

  public saveVisa(data: any){
    return this.http.post(this.baseUrl, data);
  }

  public updateVisa(data: any){
    return this.http.put(this.baseUrl, data)
  }

  public deleteVisa(id: number){
    return this.http.delete(this.baseUrl+ "/" + id);
  }


  private urlOfUpload = "http://localhost:8080/api/v1/uploadVisa";

  public getAllUploadedFile(){
    return this.http.get(this.urlOfUpload);
  }

  public getUploadedFileId(id: number){
    return this.http.get(this.urlOfUpload + "/" + id);
  }

  public saveUploadedFile(data: any){
    return this.http.post(this.urlOfUpload, data);
  }


  public updateUploadedFile(data: any){
    return this.http.put(this.urlOfUpload, data)
  }

  public deleteUploadedFile(id: number){
    return this.http.delete(this.urlOfUpload+ "/" + id);
  }



}
