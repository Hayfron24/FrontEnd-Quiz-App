import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlSubjectComponent } from './html-subject.component';

describe('HtmlSubjectComponent', () => {
  let component: HtmlSubjectComponent;
  let fixture: ComponentFixture<HtmlSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HtmlSubjectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HtmlSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
