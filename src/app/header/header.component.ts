import { Component,Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { DataService } from '../data.service';
import { NgFor, NgIf, NgStyle, isPlatformBrowser } from '@angular/common';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIf,NgFor,NgStyle,],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  themeBtn = "../../assets/images/light-btn.svg";
  isDarkMode = false;
  data:any;
  subject:any;



  constructor(private themeService: DataService,@Inject(PLATFORM_ID) private platformId: Object, private route: ActivatedRoute, private subjectService: DataService){

    if (isPlatformBrowser(this.platformId)) {
      this.isDarkMode = localStorage.getItem('isDarkMode') === 'true';
      this.updateTheme();
      // this.themeService.toggleDarkMode();
    }
  }

  ngOnInit(): void {
    this.subjectService.selectedSubject$.subscribe((subject) => {
      this.subject = subject;
    });
  }
  
  OnDarkMode(){
    // this.isDarkMode = !this.isDarkMode;

    // this.themeBtn = this.isDarkMode?"../../assets/images/light-btn.svg":"../../assets/images/dark-btn.svg";


    if (isPlatformBrowser(this.platformId)) {
      this.isDarkMode = !this.isDarkMode;
      document.body.classList.toggle('dark-bg')
      localStorage.setItem('isDarkMode', this.isDarkMode.toString());
      this.updateTheme()
      this.themeService.toggleDarkMode();
    }

    console.log(this.isDarkMode);
      
  }

  private updateTheme() {
    this.themeBtn = this.isDarkMode ? "../../assets/images/dark-btn.svg" : "../../assets/images/light-btn.svg";
    document.body.classList.toggle('dark-bg', this.isDarkMode);
  }
  
}
