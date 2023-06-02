import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'visaCheckKuwait';

  link: string = '';

  checkUrl() {
    return this.link.includes('/admin');
  }

  ngOnInit(): void {
    console.log(window.location.href);

    this.link = window.location.href;
  }
}
