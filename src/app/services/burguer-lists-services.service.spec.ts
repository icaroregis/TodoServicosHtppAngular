import { TestBed } from '@angular/core/testing';

import { BurguerListsServicesService } from './burguer-lists-services.service';

describe('BurguerListsServicesService', () => {
  let service: BurguerListsServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BurguerListsServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
