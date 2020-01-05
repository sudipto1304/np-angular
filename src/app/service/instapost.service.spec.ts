import { TestBed } from '@angular/core/testing';

import { InstapostService } from './instapost.service';

describe('InstapostService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InstapostService = TestBed.get(InstapostService);
    expect(service).toBeTruthy();
  });
});
