import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeseroPanelComponent } from './mesero-panel.component';

describe('MeseroPanelComponent', () => {
  let component: MeseroPanelComponent;
  let fixture: ComponentFixture<MeseroPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeseroPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeseroPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
