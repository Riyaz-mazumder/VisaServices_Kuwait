import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{

  isChecked: boolean = false;

  toggleCheckbox() {
    this.isChecked = !this.isChecked;
  }
  
  ngOnInit(): void {


    // const b = document.querySelector('#iii')  as HTMLElement;

    // const t = document.querySelector('#nav-check') as HTMLElement;
    // const nodeList = document.querySelectorAll('.closes');

  
  
  
    // nodeList.forEach((element: Element) => {
    //   element.addEventListener('click', () => {      
    //    t.ariaChecked;
    //   });
    // });

  }
  isNavbarOpen = false;

  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }


  dropdownVisible = false;

  toggleDropdown() {
    this.dropdownVisible = !this.dropdownVisible;
  }

  hideDropdown() {
    this.dropdownVisible = false;
  }

  isNavOpen: boolean = false;

  toggleNav(): void {
    this.isNavOpen = !this.isNavOpen;
  }

  hideNav(): void {
    this.isNavOpen = false;
  }


 
}
