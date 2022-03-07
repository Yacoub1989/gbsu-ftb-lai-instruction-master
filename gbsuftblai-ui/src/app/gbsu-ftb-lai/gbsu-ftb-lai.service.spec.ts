import { TestBed } from '@angular/core/testing';

import { GbsuFtbLaiService } from './gbsu-ftb-lai.service';

describe('GbsuFtbLaiService', () => {
  let service: GbsuFtbLaiService;
  getConvertir(): Observable<any>;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GbsuFtbLaiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
