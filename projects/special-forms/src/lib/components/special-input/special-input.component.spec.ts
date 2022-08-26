import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialInputComponent } from './special-input.component';

describe('SpecialInputComponent', () => {
  let component: SpecialInputComponent;
  let fixture: ComponentFixture<SpecialInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecialInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
