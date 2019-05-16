import {Time} from '@angular/common';

export class Match {
  gameID: number;
  player1team1: number;
  player2team2: number;
  player3team1: number;
  player4team2: number;
  results: string;
  gameSetTeam1: number;
  gameSetTeam2: number;
  gameDate: Date;
  playTime: Time;

  constructor(player1team1: number, player2team2: number, results: string, gameDate: Date,
              gameID?: number, player3team1?: number, player4team2?: number,
              gameSetTeam1?: number, gameSetTeam2?: number, playTime?: Time) {
    this.gameID = gameID;
    this.player1team1 = player1team1;
    this.player2team2 = player2team2;
    this.player3team1 = player3team1;
    this.player4team2 = player4team2;
    this.results = results;
    this.gameSetTeam1 = gameSetTeam1;
    this.gameSetTeam2 = gameSetTeam2;
    this.gameDate = gameDate;
    this.playTime = playTime;
  }
}
