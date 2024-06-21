import { Component, HostBinding } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { IndexPageComponent } from './index-page/index-page.component';
import { DataService } from './data.service';
import { get } from 'http';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HeaderComponent, IndexPageComponent,]
})
export class AppComponent {
  title = 'fronendQuizApp';
  isDarkMode = false;

  constructor(private dataService: DataService) {
    this.dataService.isDarkMode$.subscribe(isDarkMode => {
      // Use the current value of isDarkMode here
      console.log('Dark mode is:', isDarkMode);
      this.isDarkMode = isDarkMode;  // Assign the value to a property in AppComponent

    });

    }
      @HostBinding('class.dark') get mode(){
        return this.isDarkMode;
      }
}
