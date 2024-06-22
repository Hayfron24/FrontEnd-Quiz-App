import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = "../assets/data.json";

  private isDarkModeSubject = new BehaviorSubject<boolean>(false);

  isDarkMode$ = this.isDarkModeSubject.asObservable();

  toggleDarkMode(){
    return this.isDarkModeSubject.next(!this.isDarkModeSubject.value); 
  }
  
  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get(this.apiUrl);
  };

}
