import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAdminMoviesListComponent } from './app-admin-movies-list.component';

describe('AppAdminMoviesListComponent', () => {
  let component: AppAdminMoviesListComponent;
  let fixture: ComponentFixture<AppAdminMoviesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppAdminMoviesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppAdminMoviesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
