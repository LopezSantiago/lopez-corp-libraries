import { TestBed } from '@angular/core/testing';

import { SpecialFormsService } from './special-forms.service';

describe('SpecialFormsService', () => {
  let service: SpecialFormsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpecialFormsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
