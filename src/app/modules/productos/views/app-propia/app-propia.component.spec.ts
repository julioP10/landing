import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPropiaComponent } from './app-propia.component';

describe('AppPropiaComponent', () => {
  let component: AppPropiaComponent;
  let fixture: ComponentFixture<AppPropiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppPropiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppPropiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
