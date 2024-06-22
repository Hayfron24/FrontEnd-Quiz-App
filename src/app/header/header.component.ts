import { Component,Inject, PLATFORM_ID } from '@angular/core';
import { DataService } from '../data.service';
import { isPlatformBrowser } from '@angular/common';



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  themeBtn = "../../assets/images/light-btn.svg";
  isDarkMode = false;
  

  // darkElements = document.querySelectorAll('body, .hearder, .search-bar') as NodeListOf<HTMLElement>;
  // originalBackgroundColor = window.getComputedStyle(document.body).backgroundColor;



  constructor(private themeService: DataService,@Inject(PLATFORM_ID) private platformId: Object){}

  OnDarkMode(){
    // this.isDarkMode = !this.isDarkMode;

    this.themeBtn = this.isDarkMode?"../../assets/images/light-btn.svg":"../../assets/images/dark-btn.svg";

    
    if (isPlatformBrowser(this.platformId)) {
      this.isDarkMode = !this.isDarkMode;
      document.body.classList.toggle('dark-bg')
    }

    console.log(this.isDarkMode);
    this.themeService.toggleDarkMode();  
  }
  
}
