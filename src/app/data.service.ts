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

  private selectedSubjectSource = new BehaviorSubject<any>(null);
  selectedSubject$ = this.selectedSubjectSource.asObservable();

  selectSubject(subject: any) {
    this.selectedSubjectSource.next(subject);
  }

  clearSubject() {
    this.selectedSubjectSource.next(null);
  }

  private finalScoreSource  = new BehaviorSubject<any>(0);
  finalScoreSubject$ = this.finalScoreSource.asObservable();

  getScore(score:number){
    this.finalScoreSource.next(score);
  }
  
  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get(this.apiUrl);
  };

}
