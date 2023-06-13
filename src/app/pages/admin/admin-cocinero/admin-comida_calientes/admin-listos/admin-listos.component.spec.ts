import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminListosComponent } from './admin-listos.component';

describe('AdminListosComponent', () => {
  let component: AdminListosComponent;
  let fixture: ComponentFixture<AdminListosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminListosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminListosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
