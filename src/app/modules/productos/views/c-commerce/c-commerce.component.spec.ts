import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CCommerceComponent } from './c-commerce.component';

describe('CCommerceComponent', () => {
  let component: CCommerceComponent;
  let fixture: ComponentFixture<CCommerceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CCommerceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CCommerceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
