import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return false on trying to login with wrong username and password', () => {
    service.login({username: 'abc', password: 'def'}).subscribe(authenticated => {
      expect(authenticated).toEqual(false);
    });
  });

  it('should return true on trying to login with correct username and password', () => {
    service.login({username: 'admin', password: 'admin'}).subscribe(authenticated => {
      expect(authenticated).toEqual(true);
    });
  });

  it('should remove user from sessionstorage on logout', () => {
    service.logout();
    expect(sessionStorage.getItem('authenticated')).toBeNull();
  });
});
