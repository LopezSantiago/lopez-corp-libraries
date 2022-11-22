import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControlSelectorComponent } from './form-control-selector.component';
describe('FormControlSelectorComponent', () => {
  let component: FormControlSelectorComponent;
  let fixture: ComponentFixture<FormControlSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormControlSelectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormControlSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
