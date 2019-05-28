import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {ConfigService} from './config.service';
import {Penalty} from '../models/penalty';

@Injectable({
  providedIn: 'root'
})
export class PenaltyService {
  penalties2 = [{
    penaltyID: 1,
    match: 12,
    player: 2,
    reason: 'Spiel hat nicht stattgefunden'
  }, {
    penaltyID: 2,
    match: 23,
    player: 2,
    reason: 'Falscher Spielstand eingetragen'
  }, {
    penaltyID: 3,
    match: 25,
    player: 2,
    reason: 'Spiel hat nicht stattgefunden'
  }, {
    penaltyID: 4,
    match: 32,
    player: 2,
    reason: 'Spiel hat nicht stattgefunden'
  }];
  penalties1 = [];

  constructor(private http: HttpClient) {
  }

  getPenalties(currentUserID: number): Observable<Penalty[]> {
    if (currentUserID === 1) {
      return of(this.penalties1);
    }
    if (currentUserID === 2) {
      return of(this.penalties2);
    }
  }
}
