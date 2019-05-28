import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AdultMatch, Match, SingleMatch, TeamMatch} from '../models/match';
import {ConfigService} from './config.service';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  constructor(private http: HttpClient) {
  }

  private getHttpOptions() {
    return {
      headers: new HttpHeaders({
        Authorization: 'Basic ' + window.btoa(ConfigService.clientID + ':' + ConfigService.secret)
      })
    };
  }

  getAllMatches(): Observable<Match[]> {
    const httpOptions = this.getHttpOptions();
    return this.http.get<Match[]>(ConfigService.baseURL + '/api/match', httpOptions);
  }

  getMatchesByPlayer(id: number): Observable<Match[]> {
    const httpOptions = this.getHttpOptions();
    return this.http.get<Match[]>(ConfigService.baseURL + '/api/match/byplayer/' + id, httpOptions);
  }

  addAdultMatch(match: AdultMatch): Observable<Match> {
    const httpOptions = this.getHttpOptions();
    return this.http.post<Match>(ConfigService.baseURL + '/api/match', match, httpOptions);
  }

  addSingleMatch(match: SingleMatch): Observable<Match> {
    const httpOptions = this.getHttpOptions();
    return this.http.post<Match>(ConfigService.baseURL + '/api/match', match, httpOptions);
  }

  addTeamMatch(match: TeamMatch): Observable<Match> {
    const httpOptions = this.getHttpOptions();
    return this.http.post<Match>(ConfigService.baseURL + '/api/match', match, httpOptions);
  }
}
