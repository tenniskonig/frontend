import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {HighscoreEntry} from '../models/highscoreEntry';
import {ConfigService} from './config.service';

@Injectable({
  providedIn: 'root'
})
export class HighscoreService {

  constructor(private http: HttpClient) {
  }

  getHighscores(): Observable<HighscoreEntry[]> {
    return this.http.get<HighscoreEntry[]>(ConfigService.baseURL + '/api/highscore');
  }
}