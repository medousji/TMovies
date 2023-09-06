import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppHomeSectionComponent } from './app-home-section.component';

describe('AppHomeSectionComponent', () => {
  let component: AppHomeSectionComponent;
  let fixture: ComponentFixture<AppHomeSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppHomeSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppHomeSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
