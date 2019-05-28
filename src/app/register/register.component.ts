import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerform = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    password1: ['', Validators.required],
    password2: ['', Validators.required],
    geschlechtW: ['false']
  });

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
  }

  register() {
    this.authService.register(
      this.registerform.get('firstName').value,
      this.registerform.get('lastName').value,
      this.registerform.get('password1').value,
      this.registerform.get('geschlechtW').value)
      .subscribe(res => {
        this.authService.login(
          res.username,
          this.registerform.get('password1').value)
          .subscribe(() => {
            if (AuthService.loggedIn) {
              localStorage.setItem('user', res.username);
              this.router.navigate(['']);
              this.authService.emitChange();
            }
          });
      });

  }
}

