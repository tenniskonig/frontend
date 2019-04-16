import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../services/user.service';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private loggedIn: boolean;
  currentUsername: string;

  constructor(private router: Router, private jwt: AuthService, private userService: UserService) {
    this.jwt.changeEmitted$.subscribe(() => {
      this.updateUserCredentials();
    });
  }

  ngOnInit() {
    this.updateUserCredentials();
  }

  routeMatchentry() {
    this.router.navigate(['/SpielErstellen']);
  }

  routeHighscore() {
    this.router.navigate(['/Bestenliste']);
  }

  routeMatchhistory() {
    this.router.navigate(['/Matchverlauf']);
  }

  routeLogin() {
    this.router.navigate(['/login']);
  }

  logout() {
    this.jwt.logout();
    this.router.navigate(['']);
    this.updateUserCredentials();
  }

  updateUserCredentials() {
    this.loggedIn = this.jwt.loggedIn;
    this.currentUsername = UserService.currentUsername;
  }
}
