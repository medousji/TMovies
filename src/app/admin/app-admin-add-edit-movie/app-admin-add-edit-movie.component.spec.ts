import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAdminAddEditMovieComponent } from './app-admin-add-edit-movie.component';

describe('AppAdminAddEditMovieComponent', () => {
  let component: AppAdminAddEditMovieComponent;
  let fixture: ComponentFixture<AppAdminAddEditMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppAdminAddEditMovieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppAdminAddEditMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
