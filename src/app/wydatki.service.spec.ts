import { TestBed } from '@angular/core/testing';

import { WydatkiService } from './wydatki.service';

describe('WydatkiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WydatkiService = TestBed.get(WydatkiService);
    expect(service).toBeTruthy();
  });
});
