import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {tap} from 'rxjs/operators';
import {ConfigService} from './config.service';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private emitChangeSource = new Subject<any>();
  changeEmitted$ = this.emitChangeSource.asObservable();

  constructor(private http: HttpClient) {
  }

  public static get currentUsername(): string {
    return localStorage.getItem('user');
  }

  public static get loggedIn(): boolean {
    return localStorage.getItem('access_token') !== null;
  }

  emitChange() {
    this.emitChangeSource.next();
  }

  login(username: string, password: string) {
    const formData = this.getFormData(username, password);
    const httpOptions = this.getHttpOoptions();
    return this.http.post<{ access_token: string }>(ConfigService.baseURL + '/oauth/token',
      formData, httpOptions).pipe(tap(res => {
      localStorage.setItem('access_token', res.access_token);
    }));
  }

  private getHttpOoptions() {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Basic ' + window.btoa(ConfigService.clientID + ':' + ConfigService.secret)
      })
    };
    return httpOptions;
  }

  private getFormData(username: string, password: string): FormData {
    const formData = new FormData();
    formData.append('grant_type', 'password');
    formData.append('username', username);
    formData.append('password', password);
    return formData;
  }

  register(username: string, password: string) {
    return this.http.post<{ access_token: string }>(ConfigService.baseURL, {username, password}).pipe(tap(res => {
      this.login(username, password);
    }));
  }

  logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('user');
  }

}