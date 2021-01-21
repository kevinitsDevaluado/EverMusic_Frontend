import { TestBed } from '@angular/core/testing';

import { NormalUserAuthenticatedGuard } from './normal-user-authenticated.guard';

describe('NormalUserAuthenticatedGuard', () => {
  let guard: NormalUserAuthenticatedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NormalUserAuthenticatedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
