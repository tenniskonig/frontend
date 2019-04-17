import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private loggedIn: boolean;
  currentUsername: string;

  constructor(private router: Router, private auth: AuthService) {
    this.auth.changeEmitted$.subscribe(() => {
      this.updateUserCredentials();
      this.loggedIn = true; // only called after login
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
    this.auth.logout();
    this.updateUserCredentials();
    this.router.navigate(['']);
  }

  updateUserCredentials() {
    this.loggedIn = AuthService.loggedIn;
    this.currentUsername = AuthService.currentUsername;
  }
}
