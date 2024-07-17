import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonsterLessonsComponent } from './monster-lessons.component';

describe('MonsterLessonsComponent', () => {
  let component: MonsterLessonsComponent;
  let fixture: ComponentFixture<MonsterLessonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonsterLessonsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MonsterLessonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
