import { TestBed } from '@angular/core/testing';

import { OferrsService } from './oferrs.service';

describe('OferrsService', () => {
  let service: OferrsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OferrsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
