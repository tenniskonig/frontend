import {Component, OnInit} from '@angular/core';
import {Match} from '../models/match';
import {FormBuilder} from '@angular/forms';
import {Observable} from 'rxjs';
import {MatchService} from '../services/match.service';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-penalty-dashboard-admin',
  templateUrl: './penalty-dashboard-admin.component.html',
  styleUrls: ['./penalty-dashboard-admin.component.css']
})
export class PenaltyDashboardAdminComponent implements OnInit {
  private matches: Match[];
  private filteredMatches: Observable<Match[]>;
  private penaltyform = this.fb.group({
    match: [''],
    reason: ['']
  });
  private selectedMatch: Match;

  constructor(private fb: FormBuilder, private matchService: MatchService) {
  }

  ngOnInit() {
    this.matches = [];
    this.matchService.getAllMatches().subscribe(res => {
      res.forEach(m => {
        this.addMatch(m);
      });
      this.filteredMatches = this.penaltyform.get('match').valueChanges
        .pipe(
          startWith(''),
          map(value => this._filter(value))
        );
    });
  }

  private _filter(value: string): Match[] {
    const filterValue = value;
    return this.matches.filter(match => match.gameID.toString().includes(filterValue));
  }

  private addMatch(m) {
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

  private setMatch(match: Match) {
    this.selectedMatch = match;
  }

  private submit() {
    this.penaltyform.patchValue({
      match: [''],
      reason: ['']
    });
  }
}
