import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPersecusionComponent } from './product-persecusion.component';

describe('ProductPersecusionComponent', () => {
  let component: ProductPersecusionComponent;
  let fixture: ComponentFixture<ProductPersecusionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductPersecusionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductPersecusionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
