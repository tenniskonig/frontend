import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {MatchentryComponent} from './matchentry/matchentry.component';
import {HighscoreComponent} from './highscore/highscore.component';
import {MatchHistoryComponent} from './match-history/match-history.component';
import {LoginComponent} from './login/login.component';
import {AuthGuardService as AuthGuard} from './services/auth-guard.service';
import {RulesComponent} from './rules/rules.component';
import {PenaltyHistoryComponent} from './penalty-history/penalty-history.component';

const routes: Routes = [
  {path: 'SpielerErstellen', component: AppComponent},
  {path: 'SpielErstellen', component: MatchentryComponent, canActivate: [AuthGuard]},
  {path: 'Bestenliste', component: HighscoreComponent},
  {path: 'Matchverlauf', component: MatchHistoryComponent, canActivate: [AuthGuard]},
  {path: 'Regeln', component: RulesComponent},
  {path: 'login', component: LoginComponent},
  {path: 'Strafen', component: PenaltyHistoryComponent, canActivate: [AuthGuard]}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
