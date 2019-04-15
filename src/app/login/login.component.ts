import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {JwtService} from '../services/jwt.service';

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

  constructor(private fb: FormBuilder, private jwt: JwtService) {
  }

  ngOnInit() {
  }

  login() {
    this.jwt.login(this.loginform.controls.username.value, this.loginform.controls.password.value).subscribe();
    localStorage.setItem('user', this.loginform.controls.username.value);
  }
}
