import { TestBed } from '@angular/core/testing';

import { ResourcecompanyService } from './resourcecompany.service';

describe('ResourcecompanyService', () => {
  let service: ResourcecompanyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResourcecompanyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
