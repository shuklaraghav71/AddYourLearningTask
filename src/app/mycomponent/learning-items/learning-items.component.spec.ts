import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningItemsComponent } from './learning-items.component';

describe('LearningItemsComponent', () => {
  let component: LearningItemsComponent;
  let fixture: ComponentFixture<LearningItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearningItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
