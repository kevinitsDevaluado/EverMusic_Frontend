import { TestBed } from '@angular/core/testing';

import { AdminAuthenticatedGuard } from './admin-authenticated.guard';

describe('AdminAuthenticatedGuard', () => {
  let guard: AdminAuthenticatedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AdminAuthenticatedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
