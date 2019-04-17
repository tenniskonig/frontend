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
    this.highscores = [{position: 1, name: 'Test', matchesPlayed: 12, points: 24}]; // Mock Data
  }
}
