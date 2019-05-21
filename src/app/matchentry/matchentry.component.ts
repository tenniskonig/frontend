import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {startWith} from 'rxjs/internal/operators/startWith';
import {User} from '../models/user';
import {UserService} from '../services/user.service';
import {AdultMatch, Match, SingleMatch, TeamMatch} from '../models/match';
import {Time} from '@angular/common';
import {MatchService} from '../services/match.service';

@Component({
  selector: 'app-matchentry',
  templateUrl: './matchentry.component.html',
  styleUrls: ['./matchentry.component.css']
})
export class MatchentryComponent implements OnInit {
  matchform = this.fb.group({
    player1: [''],
    player2: [''],
    player3: [''],
    player4: [''],
    teammatch: false,
    satz1pointsplayer1: [''],
    satz1pointsplayer2: [''],
    satz2pointsplayer1: [''],
    satz2pointsplayer2: [''],
    satz3pointsplayer1: [''],
    satz3pointsplayer2: [''],
    playtime: [''],
    playdate: [new Date()]
  });

  // Alle verfügbaren Spieler und gefilterte Suchvorschläge
  players: User[] = [];
  filteredPlayers1: Observable<User[]>;
  filteredPlayers2: Observable<User[]>;
  filteredPlayers3: Observable<User[]>;
  filteredPlayers4: Observable<User[]>;

  // ausgewählte Spieler
  selectedPlayer1: User;
  selectedPlayer2: User;
  selectedPlayer3: User;
  selectedPlayer4: User;

  isTeammatch = false;
  isAdultPlayer = false;

  // Erwachsener Spieler
  readonly adultPlayer = new User(0, 'erwachsener.spieler', 'Erwachsener', 'Spieler', false, false);

  // Sätze pro team
  private gameSetTeam1 = 0;
  private gameSetTeam2 = 0;

  constructor(private fb: FormBuilder, private userservice: UserService, private matchservice: MatchService) {
  }

  ngOnInit() {
    this.userservice.getAllUsers().subscribe(res => {
      // Erwachsenen Spieler zu Array hinzufügen
      this.players.push(this.adultPlayer);
      // Jedes JSON Objekt der Response als User Objekt speichern
      res.forEach(player =>
        this.players.push(new User(
          player.id,
          player.username,
          player.firstName,
          player.lastName,
          player.geschlechtW,
          player.admin)));
      this.initFilters();
    });
  }

  private _filter(value: string): User[] {
    const filterValue = value.toLowerCase();
    return this.players.filter(player => player.firstName.toLowerCase().includes(filterValue));
  }

  // Ein Filter pro Feld damit diese unabhängig sind
  private initFilters() {
    this.filteredPlayers1 = this.matchform.get('player1').valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
    this.filteredPlayers2 = this.matchform.get('player2').valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
    this.filteredPlayers3 = this.matchform.get('player3').valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
    this.filteredPlayers4 = this.matchform.get('player4').valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  submit() {
    if (this.isAdultPlayer) {
      this.submitAdultmatch();
    }
    if (this.isTeammatch) {
      this.getGameSets();
      this.submitTeammatch();
    }
    if (!this.isAdultPlayer && !this.isTeammatch) {
      this.getGameSets();
      this.submitSinglematch();
    }
  }

  private submitAdultmatch() {
    let match = new AdultMatch();
    match.player1team1 = this.selectedPlayer1.id;
    match.player2team2 = this.selectedPlayer2.id;
    match.playTime = this.getPlaytime();
    match.gameDate = this.matchform.get('playdate').value;
    this.matchservice.addMatch(match).subscribe();
    this.reset();
  }


  private submitTeammatch() {
    let match = new TeamMatch();
    match.player1team1 = this.selectedPlayer1.id;
    match.player2team2 = this.selectedPlayer2.id;
    match.player3team1 = this.selectedPlayer3.id;
    match.player4team2 = this.selectedPlayer4.id;
    match.results = this.getResults();
    match.gameSetTeam1 = this.gameSetTeam1;
    match.gameSetTeam2 = this.gameSetTeam2;
    match.gameDate = this.matchform.get('playdate').value;
    this.matchservice.addMatch(match).subscribe();
    this.reset();
  }

  private submitSinglematch() {
    let match = new SingleMatch();
    match.player1team1 = this.selectedPlayer1.id;
    match.player2team2 = this.selectedPlayer2.id;
    match.results = this.getResults();
    match.gameSetTeam1 = this.gameSetTeam1;
    match.gameSetTeam2 = this.gameSetTeam2;
    match.gameDate = this.matchform.get('playdate').value;
    this.matchservice.addMatch(match).subscribe();
    this.reset();
  }

  // alles zurücksetzen
  private reset() {
    this.gameSetTeam1 = 0;
    this.gameSetTeam2 = 0;
    this.selectedPlayer1 = undefined;
    this.selectedPlayer2 = undefined;
    this.selectedPlayer3 = undefined;
    this.selectedPlayer4 = undefined;
    this.matchform.patchValue({
      player1: [''],
      player2: [''],
      player3: [''],
      player4: [''],
      teammatch: false,
      satz1pointsplayer1: [''],
      satz1pointsplayer2: [''],
      satz2pointsplayer1: [''],
      satz2pointsplayer2: [''],
      satz3pointsplayer1: [''],
      satz3pointsplayer2: [''],
      playtime: [''],
      playdate: [new Date()]
    });
  }

  changeTeammatch() {
    this.isTeammatch = this.matchform.get('teammatch').value;
    this.changeAdultplayer();
  }

  changeAdultplayer() {
    this.isAdultPlayer = false;
    if (this.isTeammatch === false) {
      if (this.matchform.get('player1').value === 'Erwachsener Spieler') {
        this.isAdultPlayer = true;
      }
      if (this.matchform.get('player2').value === 'Erwachsener Spieler') {
        this.isAdultPlayer = true;
      }
    }
  }

  setPlayer1(player: User) {
    this.selectedPlayer1 = player;
  }

  setPlayer2(player: User) {
    this.selectedPlayer2 = player;
  }

  setPlayer3(player: User) {
    this.selectedPlayer3 = player;
  }

  setPlayer4(player: User) {
    this.selectedPlayer4 = player;
  }

  private getPlaytime(): Time {
    const timeString: string = this.matchform.get('playtime').value;
    const timeArray: string[] = timeString.split(':');
    let time: Time;
    time = {
      hours: +timeArray[0], // + casts string to number
      minutes: +timeArray[1]
    };
    return time;
  }

  private getResults(): string {
    return this.matchform.get('satz1pointsplayer1').value + ':' + this.matchform.get('satz1pointsplayer2').value + ';' +
      this.matchform.get('satz2pointsplayer1').value + ':' + this.matchform.get('satz2pointsplayer2').value + ';' +
      this.matchform.get('satz3pointsplayer1').value + ':' + this.matchform.get('satz3pointsplayer2').value;
  }

  private getGameSets() {
    if (+this.matchform.get('satz1pointsplayer1').value > +this.matchform.get('satz1pointsplayer2').value) {
      this.gameSetTeam1++;
    } else {
      this.gameSetTeam2++;
    }
    if (+this.matchform.get('satz2pointsplayer1').value > +this.matchform.get('satz2pointsplayer2').value) {
      this.gameSetTeam1++;
    } else {
      this.gameSetTeam2++;
    }
    if (+this.matchform.get('satz3pointsplayer1').value > +this.matchform.get('satz3pointsplayer2').value) {
      this.gameSetTeam1++;
    } else {
      this.gameSetTeam2++;
    }
  }
}
