import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizacontraComponent } from './actualizacontra.component';

describe('ActualizacontraComponent', () => {
  let component: ActualizacontraComponent;
  let fixture: ComponentFixture<ActualizacontraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizacontraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizacontraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
