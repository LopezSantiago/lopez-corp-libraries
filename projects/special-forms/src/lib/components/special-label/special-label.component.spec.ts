import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialLabelComponent } from './special-label.component';

describe('SpecialLabelComponent', () => {
  let component: SpecialLabelComponent;
  let fixture: ComponentFixture<SpecialLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialLabelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecialLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
