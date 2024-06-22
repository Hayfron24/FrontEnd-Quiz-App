import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-subject',
  standalone: true,
  imports: [NgFor,NgIf,NgClass],
  templateUrl: './subjects.component.html',
  styleUrl: './subjects.component.css'
})
export class SubjectComponent implements OnInit{
  data: any;
  currentQuestionIndex = 0;
  displayQestion: []= [];

  isNotSelected = false;

  selectedOption: number | null = null;
  isCorrectAnswer = false;
  isSubmitted = false;

  score = 0;



  constructor(private dataService: DataService, private route: ActivatedRoute){};


  ngOnInit(): void{
    const cardId = this.route.snapshot.params['cardId'];
    
    this.dataService.getData().subscribe((result) =>{
      this.data = result.find((card:any)=> card.id === +cardId);
      console.log(this.data);


      // this.displayQestion = ;
      });
  }

  selectOption(index: number) {
    this.selectedOption = index;
    this.isNotSelected = false;
  }

  submitAnswer(): void {
    if (this.selectedOption !== null) {
      this.isSubmitted = true;
      const selectedAnswer = this.data.questions[this.currentQuestionIndex].options[this.selectedOption];
      const correctAnswer = this.data.questions[this.currentQuestionIndex].answer;
      if(selectedAnswer === correctAnswer){
        this.isCorrectAnswer = true;
        this.score +=1;
        console.log(this.score)
      }else{
          this.isCorrectAnswer = false;  
      }


      console.log(this.isCorrectAnswer);
    }else{
      this.isNotSelected = true;
    }
  }

  nextQuestion(): void {
    if (this.currentQuestionIndex < this.data.questions.length - 1 && this.selectedOption !==null) {
      this.currentQuestionIndex++;
      this.selectedOption = null;
      this.isSubmitted = false
    }
  }

  previousQuestion(): void {
    if (this.currentQuestionIndex > 0) {
        this.currentQuestionIndex--;
      }
  }

}
