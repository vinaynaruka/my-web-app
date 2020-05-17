import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from 'src/app/auth/auth.service';
import { AuthServiceMock } from 'src/app/tests/services/mocks/auth.service.mock';
import { Router } from '@angular/router';
import { routes } from 'src/app/app-routing.module';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [ ReactiveFormsModule, RouterTestingModule.withRoutes(routes) ],
      providers: [
        {provide: AuthService, useClass: AuthServiceMock}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    // tslint:disable-next-line: deprecation
    router = TestBed.get(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain loginform with default value', () => {
    expect(component.loginForm.value).toEqual({username: '', password: ''});
  });

  it('should give error on trying to login with username and password', () => {
    component.login();
    expect(component.error).toEqual('username/password required');
  });

  it('should give error on trying to login with wrong username and password', () => {
    component.loginForm.setValue({username: 'abc', password: 'def'});
    component.login();
    expect(component.error).toEqual('Invalid username or password');
  });

  it('should navigate to home if login with correct username and password', () => {
    component.loginForm.setValue({username: 'admin', password: 'admin'});
    spyOn(router, 'navigate');
    component.login();
    expect(router.navigate).toHaveBeenCalledWith(['/home']);
  });
});
