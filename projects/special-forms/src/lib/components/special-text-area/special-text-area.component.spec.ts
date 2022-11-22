import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialTextAreaComponent } from './special-text-area.component';

describe('SpecialTextAreaComponent', () => {
  let component: SpecialTextAreaComponent;
  let fixture: ComponentFixture<SpecialTextAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialTextAreaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecialTextAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
