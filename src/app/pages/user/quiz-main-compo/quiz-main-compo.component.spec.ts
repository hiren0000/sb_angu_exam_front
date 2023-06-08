import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizMainCompoComponent } from './quiz-main-compo.component';

describe('QuizMainCompoComponent', () => {
  let component: QuizMainCompoComponent;
  let fixture: ComponentFixture<QuizMainCompoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuizMainCompoComponent]
    });
    fixture = TestBed.createComponent(QuizMainCompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
