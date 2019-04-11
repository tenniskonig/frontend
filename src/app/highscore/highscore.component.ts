import {Component, OnInit} from '@angular/core';
import {HighscoreEntry} from '../models/highscoreEntry';

@Component({
  selector: 'app-highscore',
  templateUrl: './highscore.component.html',
  styleUrls: ['./highscore.component.css']
})
export class HighscoreComponent implements OnInit {
  highscores: HighscoreEntry[];
  columnsToDisplay = ['position', 'name', 'matchesPlayed', 'points'];

  constructor() {
  }

  ngOnInit() {
    this.highscores = [{position: 1, matchesPlayed: 13, name: 'Peter', points: 24}]; // Mock Data
  }

}
