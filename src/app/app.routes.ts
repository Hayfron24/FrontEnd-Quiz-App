import { Routes } from '@angular/router';
import { IndexPageComponent } from './index-page/index-page.component';
import { SubjectComponent } from './subjects/subjects.component';
import { ScoreBoardComponent } from './score-board/score-board.component';



export const routes: Routes = [
    {path: '', component: IndexPageComponent},
    {path: 'subjects/:cardId', component: SubjectComponent},
    {path: 'scoreBoard/:cardId', component: ScoreBoardComponent},

];
