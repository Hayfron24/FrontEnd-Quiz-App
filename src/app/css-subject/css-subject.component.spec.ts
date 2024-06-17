import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssSubjectComponent } from './css-subject.component';

describe('CssSubjectComponent', () => {
  let component: CssSubjectComponent;
  let fixture: ComponentFixture<CssSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CssSubjectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CssSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
