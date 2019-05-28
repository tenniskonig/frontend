import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';
import {UserService} from '../services/user.service';
import {User} from '../models/user';

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

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router, private userService: UserService) {
  }

  ngOnInit() {
  }

  login() {
    this.auth.login(this.loginform.controls.username.value, this.loginform.controls.password.value)
      .subscribe(() => {
          if (AuthService.loggedIn) {
            this.userService.getUserByUsername(this.loginform.controls.username.value).subscribe(
              res => {
                localStorage.setItem('username', res.username);
                localStorage.setItem('userId', res.id.toString());
              });
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
