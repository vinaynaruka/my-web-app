import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(user) {
    console.log('login');
    this.logout();
    return new Observable((observer) => {
      if (user && user.username === 'admin' && user.password === 'admin') {
        sessionStorage.setItem('authenticated', 'true');
        observer.next(true);
      } else {
        observer.next(false);
      }
    }).pipe(delay(1000));
  }

  logout() {
    console.log('logout');
    sessionStorage.removeItem('authenticated');
  }
}
