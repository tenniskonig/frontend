import {User} from './user';

export class HighscoreEntry {
  player: User;
  points: number;
  matchesPlayed: number;

  constructor(player: User, points: number, matchesPlayed: number) {
    this.player = player;
    this.points = points;
    this.matchesPlayed = matchesPlayed;
  }

  get name(): string {
    return this.player.firstName + this.player.lastName;
  }

}
