import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform = this.fb.group({
    username: ['', [Validators.required, Validators.pattern('[a-zA-z]+\\\.[a-zA-Z]+')]],
    password: ['', Validators.required],
  });
  private showError = false;

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {
  }

  ngOnInit() {
  }

  login() {
    this.auth.login(this.loginform.controls.username.value, this.loginform.controls.password.value)
      .subscribe(() => {
          if (AuthService.loggedIn) {
            localStorage.setItem('user', this.loginform.controls.username.value);
            this.router.navigate(['']);
            this.auth.emitChange();
          } else {
            this.showError = true;
          }
        }
      )
    ;

  }

  hideError() {
    this.showError = false;
  }
}
