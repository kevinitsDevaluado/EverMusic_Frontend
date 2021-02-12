import { TestBed } from '@angular/core/testing';

import { ProductImagesService } from './product-images.service';

describe('ProductImagesService', () => {
  let service: ProductImagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductImagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
