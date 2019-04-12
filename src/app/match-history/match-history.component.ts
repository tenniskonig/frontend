import {Component, OnInit} from '@angular/core';
import {Match} from '../models/match';

@Component({
  selector: 'app-match-history',
  templateUrl: './match-history.component.html',
  styleUrls: ['./match-history.component.css']
})
export class MatchHistoryComponent implements OnInit {
  readonly adult = -1;
  matches = [
    {
      gameID: 1,
      player1team1: 1,
      player2team2: 2,
      player3team1: null,
      player4team2: null,
      gameDate: new Date(),
      gameSetTeam1: 2,
      gameSetTeam2: 1,
      playTime: null,
      results: '1,2,3'
    },
    {
      gameID: 2,
      player1team1: 1,
      player2team2: 2,
      player3team1: 3,
      player4team2: 4,
      gameDate: new Date(),
      gameSetTeam1: 2,
      gameSetTeam2: 1,
      playTime: null,
      results: '1,2,3'
    },
    {
      gameID: 1,
      player1team1: -1,
      player2team2: 2,
      player3team1: null,
      player4team2: null,
      gameDate: new Date(),
      gameSetTeam1: 2,
      gameSetTeam2: 1,
      playTime: {hours: 1, minutes: 15},
      results: null
    },
    {
      gameID: 1,
      player1team1: 1,
      player2team2: -1,
      player3team1: null,
      player4team2: null,
      gameDate: new Date(),
      gameSetTeam1: 2,
      gameSetTeam2: 1,
      playTime: {hours: 0, minutes: 45},
      results: null
    },
  ];
  teammatches: Match[];
  adultmatches: Match[];
  singlematches: Match[];

  teamColumns = ['player1', 'player2', 'player3', 'player4', 'results'];
  singleColumns = ['player1', 'player3', 'results'];
  adultColumns = ['player1', 'playtime'];

  constructor() {
  }

  ngOnInit() {
    this.teammatches = this.matches.filter(m => this.isTeammatch(m));
    this.adultmatches = this.matches.filter(m => this.isAdultmatch(m));
    this.singlematches = this.matches.filter(m => this.isSinglematch(m));
  }

  isTeammatch(match: Match) {
    return (match.player3team1 !== null);
  }

  isAdultmatch(match: Match) {
    if (this.isTeammatch(match)) {
      return false;
    }
    if (match.player2team2 === this.adult || match.player1team1 === this.adult) {
      return true;
    }
  }

  isSinglematch(match: Match) {
    return (!this.isTeammatch(match) && !this.isAdultmatch(match));
  }
}
