import { TestBed } from '@angular/core/testing';

import { KittersService } from './kitters.service';

describe('KittersService', () => {
  let service: KittersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KittersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
