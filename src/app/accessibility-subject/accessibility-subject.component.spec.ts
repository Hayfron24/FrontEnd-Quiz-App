import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessibilitySubjectComponent } from './accessibility-subject.component';

describe('AccessibilitySubjectComponent', () => {
  let component: AccessibilitySubjectComponent;
  let fixture: ComponentFixture<AccessibilitySubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccessibilitySubjectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccessibilitySubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
