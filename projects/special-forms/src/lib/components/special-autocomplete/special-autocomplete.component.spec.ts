import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialAutocompleteComponent } from './special-autocomplete.component';

describe('SpecialAutocompleteComponent', () => {
  let component: SpecialAutocompleteComponent;
  let fixture: ComponentFixture<SpecialAutocompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SpecialAutocompleteComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
