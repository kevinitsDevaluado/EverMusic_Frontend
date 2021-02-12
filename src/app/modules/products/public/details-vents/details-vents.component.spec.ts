import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsVentsComponent } from './details-vents.component';

describe('DetailsVentsComponent', () => {
  let component: DetailsVentsComponent;
  let fixture: ComponentFixture<DetailsVentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsVentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsVentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
