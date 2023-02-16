import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SpecialArrayComponent } from './special-form.component';

describe('SpecialArrayComponent', () => {
  let component: SpecialArrayComponent;
  let fixture: ComponentFixture<SpecialArrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SpecialArrayComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
