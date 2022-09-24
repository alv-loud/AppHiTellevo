import { TestBed } from '@angular/core/testing';

import { MapcustomService } from './mapcustom.service';

describe('MapcustomService', () => {
  let service: MapcustomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MapcustomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
