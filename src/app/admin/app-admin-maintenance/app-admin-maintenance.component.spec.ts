import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAdminMaintenanceComponent } from './app-admin-maintenance.component';

describe('AppAdminMaintenanceComponent', () => {
  let component: AppAdminMaintenanceComponent;
  let fixture: ComponentFixture<AppAdminMaintenanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppAdminMaintenanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppAdminMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
