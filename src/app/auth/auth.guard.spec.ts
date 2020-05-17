import { TestBed } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { AuthServiceMock } from '../tests/services/mocks/auth.service.mock';
import { Router } from '@angular/router';

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {provide: AuthService, useClass: AuthServiceMock}
      ]
    });
    guard = TestBed.inject(AuthGuard);
    // tslint:disable-next-line: deprecation
    router = TestBed.get(Router);
  });

  // it('should be created', () => {
  //   expect(guard).toBeTruthy();
  // });
});
