import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPaginationBarComponent } from './app-pagination-bar.component';

describe('AppPaginationBarComponent', () => {
  let component: AppPaginationBarComponent;
  let fixture: ComponentFixture<AppPaginationBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppPaginationBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppPaginationBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
