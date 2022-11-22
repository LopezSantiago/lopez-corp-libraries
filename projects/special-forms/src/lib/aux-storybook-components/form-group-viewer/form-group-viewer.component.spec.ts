import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroupViewerComponent } from './form-group-viewer.component';

describe('FormGroupViewerComponent', () => {
  let component: FormGroupViewerComponent;
  let fixture: ComponentFixture<FormGroupViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormGroupViewerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormGroupViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
