import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMovieDetailsComponent } from './app-movie-details.component';

describe('AppMovieDetailsComponent', () => {
  let component: AppMovieDetailsComponent;
  let fixture: ComponentFixture<AppMovieDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppMovieDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppMovieDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
