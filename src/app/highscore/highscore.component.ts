import {Component, OnInit} from '@angular/core';
import {HighscoreEntry} from '../models/highscoreEntry';
import {HighscoreService} from '../services/highscore.service';
import {User} from '../models/user';
import {Observable, of} from 'rxjs';

@Component({
  selector: 'app-highscore',
  templateUrl: './highscore.component.html',
  styleUrls: ['./highscore.component.css']
})
export class HighscoreComponent implements OnInit {
  highscores: HighscoreEntry[];
  columnsToDisplay = ['position', 'name', 'matchesPlayed', 'points'];
  highscoreObservable: Observable<HighscoreEntry[]>;

  constructor(private highscoreService: HighscoreService) {
  }

  ngOnInit() {
    this.highscores = [];
    let highscoreEntry: HighscoreEntry;
    let player: User;
    this.highscoreService.getHighscores().subscribe(res => {
      res.forEach(entry => {
          player = new User(entry[0].id, entry[0].username, entry[0].firstName, entry[0].lastName, entry[0].geschlechtW, entry[0].admin);
          highscoreEntry = new HighscoreEntry(player, entry[1], entry[2]);
          this.highscores.push(highscoreEntry);
        }
      );
      this.highscoreObservable = of(this.highscores);
    });
  }

}
