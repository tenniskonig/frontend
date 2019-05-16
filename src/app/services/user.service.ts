import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../models/user';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ConfigService} from './config.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  private getHttpOptions() {
    return {
      headers: new HttpHeaders({
        Authorization: 'Basic ' + window.btoa(ConfigService.clientID + ':' + ConfigService.secret)
      })
    };
  }

  getAllUsers(): Observable<User[]> {
    const httpOptions = this.getHttpOptions();
    return this.http.get<User[]>(ConfigService.baseURL + '/api/player', httpOptions);
  }

  getUserByID(id: number): Observable<User> {
    const httpOptions = this.getHttpOptions();
    return this.http.get<User>(ConfigService.baseURL + '/api/player/' + id, httpOptions);
  }
}
