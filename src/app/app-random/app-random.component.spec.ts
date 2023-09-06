import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppRandomComponent } from './app-random.component';

describe('AppRandomComponent', () => {
  let component: AppRandomComponent;
  let fixture: ComponentFixture<AppRandomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppRandomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppRandomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
