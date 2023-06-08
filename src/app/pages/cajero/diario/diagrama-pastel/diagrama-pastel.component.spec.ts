import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagramaPastelComponent } from './diagrama-pastel.component';

describe('DiagramaPastelComponent', () => {
  let component: DiagramaPastelComponent;
  let fixture: ComponentFixture<DiagramaPastelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiagramaPastelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiagramaPastelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
