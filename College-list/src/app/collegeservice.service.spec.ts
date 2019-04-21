import { TestBed } from '@angular/core/testing';

import { CollegeserviceService } from './collegeservice.service';

describe('CollegeserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CollegeserviceService = TestBed.get(CollegeserviceService);
    expect(service).toBeTruthy();
  });
});
