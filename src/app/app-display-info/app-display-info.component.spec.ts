import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDisplayInfoComponent } from './app-display-info.component';

describe('AppDisplayInfoComponent', () => {
  let component: AppDisplayInfoComponent;
  let fixture: ComponentFixture<AppDisplayInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppDisplayInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppDisplayInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
