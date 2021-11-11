import { TestBed } from '@angular/core/testing';

import { BlurViewService } from './blur-view.service';

describe('BlurViewService', () => {
  let service: BlurViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlurViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
