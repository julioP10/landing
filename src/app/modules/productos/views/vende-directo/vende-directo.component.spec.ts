import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendeDirectoComponent } from './vende-directo.component';

describe('VendeDirectoComponent', () => {
  let component: VendeDirectoComponent;
  let fixture: ComponentFixture<VendeDirectoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendeDirectoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendeDirectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
