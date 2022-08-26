import { TestBed } from '@angular/core/testing';

import { SpecialFormBuilderService } from './special-form-builder.service';

describe('SpecialFormBuilderService', () => {
  let service: SpecialFormBuilderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpecialFormBuilderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
