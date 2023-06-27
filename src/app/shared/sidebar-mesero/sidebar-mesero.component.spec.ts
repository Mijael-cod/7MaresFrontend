import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarMeseroComponent } from './sidebar-mesero.component';

describe('SidebarMeseroComponent', () => {
  let component: SidebarMeseroComponent;
  let fixture: ComponentFixture<SidebarMeseroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarMeseroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarMeseroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
