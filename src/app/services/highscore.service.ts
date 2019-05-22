import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {HighscoreEntry} from '../models/highscoreEntry';
import {ConfigService} from './config.service';

@Injectable({
  providedIn: 'root'
})
export class HighscoreService {

  constructor(private http: HttpClient) {
  }

  private getHttpOptions() {
    return {
      headers: new HttpHeaders({
        Authorization: 'Basic ' + window.btoa(ConfigService.clientID + ':' + ConfigService.secret)
      })
    };
  }

  getHighscores(): Observable<HighscoreEntry[]> {
    const httpOptions = this.getHttpOptions();
    return this.http.get<HighscoreEntry[]>(ConfigService.baseURL + '/api/highscore', httpOptions);
  }
}
