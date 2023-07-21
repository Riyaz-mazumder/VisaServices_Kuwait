import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { DataServicService } from '../data-servic.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload-visa-file',
  templateUrl: './upload-visa-file.component.html',
  styleUrls: ['./upload-visa-file.component.scss']
})
export class UploadVisaFileComponent {
  selectedFiles?: FileList;
  currentFile?: File;
  progress = 0;
  message = '';
  
  idOfTheFie!: string;

  fileInfos?: Observable<any>;

  constructor(
    private uploadService: DataServicService,
    private router: Router
    ) { }

  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }

  ngOnInit(): void {
    this.fileInfos = this.uploadService.getFiles();
  }

  upload(): void {
    this.progress = 0;

    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);

      if (file) {
        this.currentFile = file;

        this.uploadService.upload(this.currentFile).subscribe({
          next: (event: any) => {
            if (event.type === HttpEventType.UploadProgress) {
              this.progress = Math.round(100 * event.loaded / event.total);
            } else if (event instanceof HttpResponse) {
              this.message = event.body.message;
              // Extracting the ID using regular expression
              const idPattern = /Id: ([a-zA-Z0-9-]+) File Name:/;
              const idMatch = this.message.match(idPattern);
              const fileId = idMatch ? idMatch[1] : '';
              this.idOfTheFie = fileId;

              // Printing the extracted ID
              console.log(this.idOfTheFie);
              

              this.fileInfos = this.uploadService.getFiles();
            }
          },
          error: (err: any) => {
            console.log(err);
            this.progress = 0;

            if (err.error && err.error.message) {
              this.message = err.error.message;
            } else {
              this.message = 'Could not upload the file!';
            }

            this.currentFile = undefined;
          }
        });
      }

      this.selectedFiles = undefined;
    }
  }


  next(){
    if(this.idOfTheFie == null || this.idOfTheFie == ' '){
      alert("Frist Uplad the File")
    }else{
    this.router.navigate(['/admin/dashboard/uploadVisa/' + this.idOfTheFie]);
    }
  }
}
