import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDiagramaPastelComponent } from './admin-diagrama-pastel.component';

describe('AdminDiagramaPastelComponent', () => {
  let component: AdminDiagramaPastelComponent;
  let fixture: ComponentFixture<AdminDiagramaPastelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDiagramaPastelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminDiagramaPastelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
