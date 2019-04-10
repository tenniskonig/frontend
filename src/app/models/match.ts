import {Time} from '@angular/common';

export class Match {
  gameID: number;
  player1team1: number;
  player2team2: number;
  player1team3: number;
  player2team4: number;
  results: string;
  gameSetTeam1: number;
  gameSetTeam2: number;
  gameDate: Date;
  playTime: Time;
}
