import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialUploadComponent } from './special-upload.component';

describe('SpecialUploadComponent', () => {
  let component: SpecialUploadComponent;
  let fixture: ComponentFixture<SpecialUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialUploadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecialUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
