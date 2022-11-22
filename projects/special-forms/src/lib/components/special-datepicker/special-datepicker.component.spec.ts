import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialDatepickerComponent } from './special-datepicker.component';

describe('SpecialDatepickerComponent', () => {
  let component: SpecialDatepickerComponent;
  let fixture: ComponentFixture<SpecialDatepickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialDatepickerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecialDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
