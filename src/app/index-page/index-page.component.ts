import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { HttpClientModule } from '@angular/common/http';
import { NgFor, NgStyle } from '@angular/common';



@Component({
  selector: 'app-index-page',
  standalone: true,
  imports: [HttpClientModule,NgFor,NgStyle],
  templateUrl: './index-page.component.html',
  styleUrl: './index-page.component.css'
})
export class IndexPageComponent implements OnInit{
  data: any;

  constructor(private dataService: DataService) {}


  ngOnInit(): void {
    this.dataService.getData().subscribe((response) => {
      this.data = response.quizzes;
      console.log(this.data);
    });
  }
}
