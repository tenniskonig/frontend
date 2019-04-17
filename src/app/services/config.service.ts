import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor() {
  }

  static get clientID(): string {
    return 'tennisClientID';
  }

  static get secret(): string {
    return 'KADFgni46agPQ';
  }

  static get baseURL(): string {
    return ' http://localhost:8080';
  }
}
