import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRecibidosComponent } from './admin-recibidos.component';

describe('AdminRecibidosComponent', () => {
  let component: AdminRecibidosComponent;
  let fixture: ComponentFixture<AdminRecibidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminRecibidosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminRecibidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
