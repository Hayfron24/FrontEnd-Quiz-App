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
    const newValue = !this.isDarkModeSubject.value;
    localStorage.setItem('isDarkMode', newValue.toString());
    this.isDarkModeSubject.next(newValue);
  }

  setDarkMode(isDarkMode: boolean) {
    this.isDarkModeSubject.next(isDarkMode);
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

  clearScore(){
    this.finalScoreSource.next(0);
  }
  
  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get(this.apiUrl);
  };

}
