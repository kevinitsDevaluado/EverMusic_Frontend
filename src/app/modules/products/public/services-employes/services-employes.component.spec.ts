import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesEmployesComponent } from './services-employes.component';

describe('ServicesEmployesComponent', () => {
  let component: ServicesEmployesComponent;
  let fixture: ComponentFixture<ServicesEmployesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesEmployesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesEmployesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
