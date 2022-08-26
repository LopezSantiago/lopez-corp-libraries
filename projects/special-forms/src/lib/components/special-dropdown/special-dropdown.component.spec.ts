import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialDropdownComponent } from './special-dropdown.component';

describe('SpecialDropdownComponent', () => {
  let component: SpecialDropdownComponent;
  let fixture: ComponentFixture<SpecialDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SpecialDropdownComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
