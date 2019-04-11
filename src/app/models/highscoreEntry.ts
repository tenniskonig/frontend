export class HighscoreEntry {
  position: number;
  name: string;
  matchesPlayed: number;
  points: number;


  constructor(position: number, name: string, matchesPlayed: number, points: number) {
    this.position = position;
    this.name = name;
    this.matchesPlayed = matchesPlayed;
    this.points = points;
  }
}
