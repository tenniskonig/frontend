import {Component, OnInit} from '@angular/core';
import {Penalty} from '../models/penalty';
import {Observable, of} from 'rxjs';
import {PenaltyService} from '../services/penalty.service';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-penalty-history',
  templateUrl: './penalty-history.component.html',
  styleUrls: ['./penalty-history.component.css']
})
export class PenaltyHistoryComponent implements OnInit {
  penalties: Penalty[];
  penaltiesObservable: Observable<Penalty[]>;
columns = ['match', 'reason'];
  constructor(private penaltyService: PenaltyService) {
  }

  ngOnInit() {
    this.penalties  = [];
    this.penaltyService.getPenalties(AuthService.currentUserID).subscribe(res => {
      res.forEach(p => {
        let penalty = new Penalty();
        penalty.penaltyID = p.penaltyID;
        penalty.player = p.player;
        penalty.match = p.match;
        penalty.reason = p.reason;
        this.penalties.push(penalty);
      });
      this.penaltiesObservable = of(this.penalties);
    });
  }

}
