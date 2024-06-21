import { Routes } from '@angular/router';
import { IndexPageComponent } from './index-page/index-page.component';
import { HtmlSubjectComponent } from './html-subject/html-subject.component';
import { CssSubjectComponent } from './css-subject/css-subject.component'; 
import { JsSubjectComponent } from './js-subject/js-subject.component'; 
import { AccessibilitySubjectComponent } from './accessibility-subject/accessibility-subject.component';

export const routes: Routes = [
    {path: '', component: IndexPageComponent},
    {path: 'html-subject/:cardId', component: HtmlSubjectComponent},
    {path: 'css-subject', component: CssSubjectComponent},
    {path: 'js-subject', component: JsSubjectComponent},
    {path: 'accessibility', component: AccessibilitySubjectComponent},

];
