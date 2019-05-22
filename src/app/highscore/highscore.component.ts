import {Component, OnInit} from '@angular/core';
import {HighscoreEntry} from '../models/highscoreEntry';
import {HighscoreService} from '../services/highscore.service';

@Component({
  selector: 'app-highscore',
  templateUrl: './highscore.component.html',
  styleUrls: ['./highscore.component.css']
})
export class HighscoreComponent implements OnInit {
  highscores: HighscoreEntry[];
  columnsToDisplay = ['position', 'name', 'matchesPlayed', 'points'];

  constructor(private highscoreService: HighscoreService) {
  }

  ngOnInit() {
    this.highscoreService.getHighscores().subscribe(res => this.highscores = res);
  }
}
