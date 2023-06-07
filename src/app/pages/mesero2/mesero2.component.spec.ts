import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mesero2Component } from './mesero2.component';

describe('Mesero2Component', () => {
  let component: Mesero2Component;
  let fixture: ComponentFixture<Mesero2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mesero2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mesero2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
