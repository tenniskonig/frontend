import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {startWith} from 'rxjs/internal/operators/startWith';

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

  players: string[] = ['Erwachsener Spieler', 'Peter', 'Herbert', 'Maria']; // Mock values
  filteredPlayers1: Observable<string[]>;
  filteredPlayers2: Observable<string[]>;
  filteredPlayers3: Observable<string[]>;
  filteredPlayers4: Observable<string[]>;

  isTeammatch = false;
  isAdultPlayer = false;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.initFilters();
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.players.filter(player => player.toLowerCase().includes(filterValue));
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
}
