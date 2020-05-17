import { Injectable } from '@angular/core';
import { of } from 'rxjs';

export class AuthServiceMock {
  private isLoggedIn = false;

  constructor() { }

  login(user) {
    if (user && user.username === 'admin' && user.password === 'admin') {
      return of(true);
    } else {
      return of(false);
    }
  }
}
