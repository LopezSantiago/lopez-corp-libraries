import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialCheckboxComponent } from './special-checkbox.component';

describe('SpecialCheckboxComponent', () => {
  let component: SpecialCheckboxComponent;
  let fixture: ComponentFixture<SpecialCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialCheckboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecialCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
