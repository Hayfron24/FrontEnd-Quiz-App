import { Routes } from '@angular/router';
import { IndexPageComponent } from './index-page/index-page.component';
import { SubjectComponent } from './subjects/subjects.component';



export const routes: Routes = [
    {path: '', component: IndexPageComponent},
    {path: 'subjects/:cardId', component: SubjectComponent},

];
