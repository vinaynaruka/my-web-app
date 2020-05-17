import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  error: string;
  private invaliduserpasserror = 'Invalid username or password';
  private userpassreq = 'username/password required';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: '',
      password: '',
    });
  }

  login() {
    this.error = '';
    if (this.loginForm && this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe((loginSuccess: boolean) => {
        console.log(loginSuccess);
        if (loginSuccess) {
          this.router.navigate(['/home']);
        } else {
          this.error = this.invaliduserpasserror;
        }
      });
    } else {
      this.error = this.userpassreq;
    }
  }

}
