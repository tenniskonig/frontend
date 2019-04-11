import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {MatchentryComponent} from './matchentry/matchentry.component';
import {HighscoreComponent} from './highscore/highscore.component';

// Routen als Placeholder
const routes: Routes = [
  {path: 'SpielerErstellen', component: AppComponent},
  {path: 'SpielErstellen', component: MatchentryComponent},
  {path: 'Bestenliste', component: HighscoreComponent},
  {path: 'Matchverlauf', component: AppComponent},
  {path: 'Regeln', component: AppComponent}
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
