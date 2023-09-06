import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAdminInterfaceComponent } from './app-admin-interface.component';

describe('AppAdminInterfaceComponent', () => {
  let component: AppAdminInterfaceComponent;
  let fixture: ComponentFixture<AppAdminInterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppAdminInterfaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppAdminInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
