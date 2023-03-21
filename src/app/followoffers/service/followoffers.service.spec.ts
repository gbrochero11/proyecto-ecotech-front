import { TestBed } from '@angular/core/testing';

import { FollowoffersService } from './followoffers.service';

describe('FollowoffersService', () => {
  let service: FollowoffersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FollowoffersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
