import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoopingCardComponent } from './shooping-card.component';

describe('ShoopingCardComponent', () => {
  let component: ShoopingCardComponent;
  let fixture: ComponentFixture<ShoopingCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoopingCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoopingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
