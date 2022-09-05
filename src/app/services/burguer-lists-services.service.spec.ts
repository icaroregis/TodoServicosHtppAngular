import { TestBed } from '@angular/core/testing';

import { BurguerListsService } from './burguer-lists-services.service';

describe('BurguerListsService', () => {
  let service: BurguerListsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BurguerListsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
