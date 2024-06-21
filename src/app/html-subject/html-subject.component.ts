import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { NgFor, NgIf } from '@angular/common';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-html-subject',
  standalone: true,
  imports: [NgFor,NgIf],
  templateUrl: './html-subject.component.html',
  styleUrl: './html-subject.component.css'
})
export class HtmlSubjectComponent implements OnInit{
  data: any;
  currentQuestionIndex = 0;
  
  displayQestion: []= [];

  constructor(private dataService: DataService, private route: ActivatedRoute){};


  ngOnInit(): void{
    const cardId = this.route.snapshot.params['cardId'];
    
    this.dataService.getData().subscribe((result) =>{
      this.data = result.find((card:any)=> card.id === +cardId);
      console.log(this.data);


      // this.displayQestion = ;
      });
    }
    nextQuestion(): void {
      if (this.currentQuestionIndex < this.data.questions.length - 1) {
        this.currentQuestionIndex++;
      }
    }
    previousQuestion(): void {
      if (this.currentQuestionIndex > 0) {
          this.currentQuestionIndex--;
        }
      }

}
