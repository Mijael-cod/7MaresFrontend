import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDiagramaBarrasComponent } from './admin-diagrama-barras.component';

describe('AdminDiagramaBarrasComponent', () => {
  let component: AdminDiagramaBarrasComponent;
  let fixture: ComponentFixture<AdminDiagramaBarrasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDiagramaBarrasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminDiagramaBarrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
