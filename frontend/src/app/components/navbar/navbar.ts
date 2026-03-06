import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  @ViewChild('navList') navList!: any;

  activeClass = 'active';
  menuOpen = false;

  openMenu() {
    console.log(this.navList.nativeElement);
    this.navList.nativeElement.classList.toggle('active');
    this.menuOpen = !this.menuOpen;
  }
}
