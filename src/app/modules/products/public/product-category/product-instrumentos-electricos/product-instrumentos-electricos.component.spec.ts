import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductInstrumentosElectricosComponent } from './product-instrumentos-electricos.component';

describe('ProductInstrumentosElectricosComponent', () => {
  let component: ProductInstrumentosElectricosComponent;
  let fixture: ComponentFixture<ProductInstrumentosElectricosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductInstrumentosElectricosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductInstrumentosElectricosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
