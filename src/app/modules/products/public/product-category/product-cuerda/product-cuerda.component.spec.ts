import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCuerdaComponent } from './product-cuerda.component';

describe('ProductCuerdaComponent', () => {
  let component: ProductCuerdaComponent;
  let fixture: ComponentFixture<ProductCuerdaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductCuerdaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCuerdaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
