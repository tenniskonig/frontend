import {User} from './user';
import {Match} from './match';

export class Penalty {
  penaltyID: number;
  player: number;
  match: number;
  reason: string;
}
