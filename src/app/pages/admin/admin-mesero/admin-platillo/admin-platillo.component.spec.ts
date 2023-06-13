import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPlatilloComponent } from './admin-platillo.component';

describe('AdminPlatilloComponent', () => {
  let component: AdminPlatilloComponent;
  let fixture: ComponentFixture<AdminPlatilloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPlatilloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminPlatilloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
