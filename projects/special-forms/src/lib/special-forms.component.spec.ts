import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialFormsComponent } from './special-forms.component';

describe('SpecialFormsComponent', () => {
  let component: SpecialFormsComponent;
  let fixture: ComponentFixture<SpecialFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialFormsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecialFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
