import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
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
}
