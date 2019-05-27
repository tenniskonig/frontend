import {Component, OnInit} from '@angular/core';
import {AdultMatch, Match, SingleMatch, TeamMatch} from '../models/match';
import {MatchService} from '../services/match.service';
import {AuthService} from '../services/auth.service';
import {UserService} from '../services/user.service';
import {Observable, of} from 'rxjs';

@Component({
  selector: 'app-match-history',
  templateUrl: './match-history.component.html',
  styleUrls: ['./match-history.component.css']
})
export class MatchHistoryComponent implements OnInit {
  readonly adultID = 0;
  singlematches: SingleMatch[];
  teammatches: TeamMatch[];
  adultmatches: AdultMatch[];
  matches: Match[];
  teamColumns = ['player1', 'player2', 'player3', 'player4', 'results'];
  singleColumns = ['player1', 'player3', 'results'];
  adultColumns = ['player1', 'player2', 'playtime'];
  private singlematchesObservable: Observable<SingleMatch[]>;
  private adultmatchesObservable: Observable<AdultMatch[]>;
  private teammatchesObservable: Observable<TeamMatch[]>;

  constructor(private matchService: MatchService, private userService: UserService) {
  }

  ngOnInit() {
    this.matches = [];
    this.teammatches = [];
    this.singlematches = [];
    this.adultmatches = [];
    this.matchService.getMatchesByPlayer(AuthService.currentUserID).subscribe(
      res => {
        console.log(res);
        res.forEach(m => {
          this.addMatches(m);
        });
        this.matches.filter(m => this.isTeammatch(m)).forEach(m => {
          this.addTeammatches(m);
        });
        this.matches.filter(m => this.isAdultmatch(m)).forEach(m => {
          this.addAdultmatches(m);
        });
        this.matches.filter(m => this.isSinglematch(m)).forEach(m => {
          this.addSinglematches(m);
        });
        this.singlematchesObservable = of(this.singlematches);
        this.adultmatchesObservable = of(this.adultmatches);
        this.teammatchesObservable = of(this.teammatches);
      }
    );
  }

  private addSinglematches(m: Match) {
    let match = new SingleMatch();
    match.gameID = m.gameID;
    match.gameDate = m.gameDate;
    match.player1team1 = m.player1team1;
    match.player2team2 = m.player2team2;
    match.results = m.results;
    match.gameSetTeam1 = m.gameSetTeam1;
    match.gameSetTeam2 = m.gameSetTeam2;
    this.singlematches.push(match);
  }

  private addAdultmatches(m: Match) {
    let match = new AdultMatch();
    match.gameID = m.gameID;
    match.gameDate = m.gameDate;
    match.player1team1 = m.player1team1;
    match.player2team2 = m.player2team2;
    match.playTime = m.playTime;
    this.adultmatches.push(match);
  }

  private addTeammatches(m: Match) {
    let match = new TeamMatch();
    match.gameID = m.gameID;
    match.gameDate = m.gameDate;
    match.player1team1 = m.player1team1;
    match.player2team2 = m.player2team2;
    match.player3team1 = m.player3team1;
    match.player4team2 = m.player4team2;
    match.results = m.results;
    match.gameSetTeam1 = m.gameSetTeam1;
    match.gameSetTeam2 = m.gameSetTeam2;
    this.teammatches.push(match);
  }

  private addMatches(m) {
    let match = new Match();
    match.gameID = m.gameID;
    match.gameDate = m.gameDate;
    match.player1team1 = m.player1Team1;
    match.player2team2 = m.player2Team2;
    match.player3team1 = m.player3Team1;
    match.player4team2 = m.player4Team2;
    match.playTime = m.playTime;
    match.results = m.results;
    match.gameSetTeam1 = m.gameSetTeam1;
    match.gameSetTeam2 = m.gameSetTeam2;
    this.matches.push(match);
  }

  isTeammatch(match: Match): boolean {
    return (match.player3team1 !== null);
  }

  isAdultmatch(match: Match): boolean {
    if (!this.isTeammatch(match)) {
      if (match.player1team1 === this.adultID || match.player2team2 === this.adultID) {
        return true;
      }
    }
    return false;
  }

  isSinglematch(match: Match): boolean {
    return (!this.isTeammatch(match) && !this.isAdultmatch(match));
  }

  getPlayername(id: number): string {
    let name = '';
    if (id === this.adultID) {
      return 'Erwachsener Spieler';
    } else {
      this.userService.getUserByID(id).subscribe(res => name = res.firstName + ' ' + res.lastName);
      return name;
    }
  }
}
