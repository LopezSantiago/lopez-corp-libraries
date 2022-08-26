import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormControlViewerComponent } from './form-control-viewer.component';

describe('FormControlViewerComponent', () => {
  let component: FormControlViewerComponent;
  let fixture: ComponentFixture<FormControlViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormControlViewerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormControlViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
