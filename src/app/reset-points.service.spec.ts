import { TestBed } from '@angular/core/testing';

import { ResetPointsService } from './reset-points.service';

describe('ResetPointsService', () => {
  let service: ResetPointsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResetPointsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
