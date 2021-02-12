import { TestBed } from '@angular/core/testing';

import { SaleItemService } from './sale-item.service';

describe('SaleItemService', () => {
  let service: SaleItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaleItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
