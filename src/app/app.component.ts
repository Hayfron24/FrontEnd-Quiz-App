import { Component, HostBinding, OnInit } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { IndexPageComponent } from './index-page/index-page.component';
import { DataService } from './data.service';



@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HeaderComponent, IndexPageComponent,]
})
export class AppComponent implements OnInit{
  title = 'fronendQuizApp';
  isDarkMode = false;

  constructor(private dataService: DataService) {}


    ngOnInit(): void {
      this.isDarkMode =  localStorage.getItem('isDarkMode') === 'true';
      this.dataService.setDarkMode(this.isDarkMode);
      this.dataService.isDarkMode$.subscribe(isDarkMode => {
        console.log('Dark mode is:', isDarkMode);
        this.isDarkMode = isDarkMode;
  
        });
    }


    @HostBinding('class.dark') get mode(){
      return this.isDarkMode;
    }
}
