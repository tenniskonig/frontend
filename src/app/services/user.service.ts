import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../models/user';
import {HttpClient} from '@angular/common/http';
import {ConfigService} from './config.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(ConfigService.baseURL + 'api/player');
  }

  getUserByID(id: number): Observable<User> {
    return this.http.get<User>(ConfigService.baseURL + 'api/player/' + id);
  }
}
