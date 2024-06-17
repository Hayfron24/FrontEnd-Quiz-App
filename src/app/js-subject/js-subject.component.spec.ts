import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsSubjectComponent } from './js-subject.component';

describe('JsSubjectComponent', () => {
  let component: JsSubjectComponent;
  let fixture: ComponentFixture<JsSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JsSubjectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JsSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
