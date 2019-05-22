import {Player} from '@angular/core/src/render3/interfaces/player';

export class HighscoreEntry {
  player: Player;
  points: number;
  matchesPlayed: number;

  constructor(player: Player, points: number, matchesPlayed: number) {
    this.player = player;
    this.points = points;
    this.matchesPlayed = matchesPlayed;
  }

  get name(): string {
    return this.player.firstName + this.player.lastName;
  }
}
