import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CustomMaterialModule} from './material/material.module';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { MatchentryComponent } from './matchentry/matchentry.component';
import {ReactiveFormsModule} from '@angular/forms';
import { HighscoreComponent } from './highscore/highscore.component';
import {MatTableModule} from '@angular/material';
import { MatchHistoryComponent } from './match-history/match-history.component';
import { RulesComponent } from './rules/rules.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MatchentryComponent,
    HighscoreComponent,
    MatchHistoryComponent,
    RulesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CustomMaterialModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
