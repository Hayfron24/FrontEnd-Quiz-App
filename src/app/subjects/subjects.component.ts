import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { ActivatedRoute, RouterOutlet, Router } from '@angular/router';


@Component({
  selector: 'app-subject',
  standalone: true,
  imports: [NgFor,NgIf,NgClass,RouterOutlet],
  templateUrl: './subjects.component.html',
  styleUrl: './subjects.component.css'
})
export class SubjectComponent implements OnInit{
  data: any;
  currentQuestionIndex = 0;  

  isNotSelected = false;

  selectedOption: number | null = null;
  isCorrectAnswer = false;
  isSubmitted = false;

  numberOfQuestions = 0;
  score = 0;



  constructor(private dataService: DataService, private route: ActivatedRoute, private router: Router, private scoreData: DataService){};


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

  submitAnswer(cardId:number): void {
    if (this.selectedOption !== null) {
      this.isSubmitted = true;
      const selectedAnswer = this.data.questions[this.currentQuestionIndex].options[this.selectedOption];
      const correctAnswer = this.data.questions[this.currentQuestionIndex].answer;
      this.numberOfQuestions++;
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

    if(this.numberOfQuestions===10){
      setTimeout(() => {
        this.router.navigate(['/scoreBoard', cardId]);
        this.scoreData.getScore(this.score)
      }, 2000);
    }
    console.log(this.numberOfQuestions);
    console.log(cardId);
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
