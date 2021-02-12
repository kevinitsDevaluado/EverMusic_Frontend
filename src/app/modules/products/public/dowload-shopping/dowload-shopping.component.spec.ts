import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DowloadShoppingComponent } from './dowload-shopping.component';

describe('DowloadShoppingComponent', () => {
  let component: DowloadShoppingComponent;
  let fixture: ComponentFixture<DowloadShoppingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DowloadShoppingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DowloadShoppingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
