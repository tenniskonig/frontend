import {Time} from '@angular/common';

export class Match {
  gameID: number;
  player1team1: number;
  player2team2: number;
  gameDate: Date;

  constructor() {
  }
}

export class SingleMatch extends Match {
  results: string;
  gameSetTeam1: number;
  gameSetTeam2: number;

  constructor() {
    super();
  }
}

export class TeamMatch extends Match {
  player3team1: number;
  player4team2: number;
  results: string;
  gameSetTeam1: number;
  gameSetTeam2: number;

  constructor() {
    super();
  }
}

export class AdultMatch extends Match {
  playTime: Time;

  constructor() {
    super();
  }
}
