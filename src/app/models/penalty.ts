import {User} from './user';
import {Match} from './match';

export class Penalty {
  penaltyID: number;
  player: User;
  match: Match;
  reason: string;
}
