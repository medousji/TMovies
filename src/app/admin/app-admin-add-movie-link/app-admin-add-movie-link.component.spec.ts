import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAdminAddMovieLinkComponent } from './app-admin-add-movie-link.component';

describe('AppAdminAddMovieLinkComponent', () => {
  let component: AppAdminAddMovieLinkComponent;
  let fixture: ComponentFixture<AppAdminAddMovieLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppAdminAddMovieLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppAdminAddMovieLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
