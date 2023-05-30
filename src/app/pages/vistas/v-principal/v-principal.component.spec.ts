import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VPrincipalComponent } from './v-principal.component';

describe('VPrincipalComponent', () => {
  let component: VPrincipalComponent;
  let fixture: ComponentFixture<VPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VPrincipalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
