import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { successLogInGuard } from './success-log-in.guard';

describe('successLogInGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => successLogInGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
