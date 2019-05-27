import {Time} from '@angular/common';

export interface IMatch {
  gameID: number;
  player1team1: number;
  player2team2: number;
  gameDate: Date;
}

export class Match implements IMatch {
  gameDate: Date;
  gameID: number;
  player1team1: number;
  player2team2: number;
  player3team1: number;
  player4team2: number;
  results: string;
  gameSetTeam1: number;
  gameSetTeam2: number;
  playTime: Time;
}

export class SingleMatch implements IMatch {
  gameDate: Date;
  gameID: number;
  player1team1: number;
  player2team2: number;
  results: string;
  gameSetTeam1: number;
  gameSetTeam2: number;

  constructor() {
  }
}

export class TeamMatch implements IMatch {
  gameDate: Date;
  gameID: number;
  player1team1: number;
  player2team2: number;
  player3team1: number;
  player4team2: number;
  results: string;
  gameSetTeam1: number;
  gameSetTeam2: number;

  constructor() {
  }
}

export class AdultMatch implements IMatch {
  gameDate: Date;
  gameID: number;
  player1team1: number;
  player2team2: number;
  playTime: Time;

  constructor() {
  }

}
