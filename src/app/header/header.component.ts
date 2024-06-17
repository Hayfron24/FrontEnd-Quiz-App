import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  themeBtn = "../../assets/images/light-btn.svg";
  isDarkMode = true;


  OnDarkMode(){
    this.isDarkMode = !this.isDarkMode;

    this.themeBtn = this.isDarkMode?"../../assets/images/light-btn.svg":"../../assets/images/dark-btn.svg";

    console.log(this.isDarkMode);
  }
  
}
