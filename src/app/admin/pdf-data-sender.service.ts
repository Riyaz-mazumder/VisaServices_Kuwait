import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PdfDataSenderService {

  constructor() { }

 private data!: any;
 public setData(value: any): void {
    this.data = value;
    
    // Perform additional actions if needed
    // return of(value);
  }

 public getData(): any {
    return this.data;
  }
}
