import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAdminProfileComponent } from './app-admin-profile.component';

describe('AppAdminProfileComponent', () => {
  let component: AppAdminProfileComponent;
  let fixture: ComponentFixture<AppAdminProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppAdminProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppAdminProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
