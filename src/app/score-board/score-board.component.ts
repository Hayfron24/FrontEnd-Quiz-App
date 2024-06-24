import { NgClass, NgFor, NgIf, NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-score-board',
  standalone: true,
  imports: [NgIf, NgFor, NgClass, NgStyle],
  templateUrl: './score-board.component.html',
  styleUrl: './score-board.component.css'
})
export class ScoreBoardComponent implements OnInit{
  data:any;
  score = 0;

  constructor(private router: Router, private route: ActivatedRoute, private dataService: DataService, private subjectService: DataService){
    this.subjectService.finalScoreSubject$.subscribe((score)=>{
      this.score = score;
      
    })
  }

  ngOnInit(): void {
    const cardId = this.route.snapshot.params['cardId'];
    
    this.dataService.getData().subscribe((result) =>{
      this.data = result.find((card:any)=> card.id === +cardId);
      console.log(this.data, 'score');
      this.subjectService.selectSubject(this.data);

      // this.displayQestion = ;
    });
  }

  toIndexPage(){
    this.router.navigate(['/']);
    this.subjectService.clearSubject();
    this.dataService.clearScore();
  }
}
