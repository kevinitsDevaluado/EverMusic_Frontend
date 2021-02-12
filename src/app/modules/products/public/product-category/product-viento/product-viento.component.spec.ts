import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductVientoComponent } from './product-viento.component';

describe('ProductVientoComponent', () => {
  let component: ProductVientoComponent;
  let fixture: ComponentFixture<ProductVientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductVientoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductVientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
