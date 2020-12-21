import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryRemoveComponent } from './category-remove.component';

describe('CategoryRemoveComponent', () => {
  let component: CategoryRemoveComponent;
  let fixture: ComponentFixture<CategoryRemoveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryRemoveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
