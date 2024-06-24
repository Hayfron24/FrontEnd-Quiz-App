import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { HttpClientModule } from '@angular/common/http';
import { NgFor, NgStyle } from '@angular/common';
import { RouterOutlet, Router } from '@angular/router';



@Component({
  selector: 'app-index-page',
  standalone: true,
  imports: [HttpClientModule,NgFor,NgStyle, RouterOutlet],
  templateUrl: './index-page.component.html',
  styleUrl: './index-page.component.css'
})
export class IndexPageComponent implements OnInit{
  data: any;


  constructor(private dataService: DataService, private router: Router, private selectedService: DataService) {}


  ngOnInit(): void {
    this.dataService.getData().subscribe((response) => {
      this.data = response;
      console.log(this.data);
    });

    this.selectedService.clearSubject();

  }




  // goToQuestios(cardId:number): void {
  //   this.router.navigate(['/subjects', cardId]);
  //   // console.log(cardId);          
  // }



  selectSubject(subject: any) {
    this.selectedService.selectSubject(subject);;
    this.router.navigate(['/subjects', subject.id]);
  }

}
