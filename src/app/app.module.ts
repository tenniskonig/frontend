import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CustomMaterialModule} from './material/material.module';
import {HeaderComponent} from './header/header.component';
import {AppRoutingModule} from './app-routing.module';
import {MatchentryComponent} from './matchentry/matchentry.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HighscoreComponent} from './highscore/highscore.component';
import {MatTableModule} from '@angular/material';
import {MatchHistoryComponent} from './match-history/match-history.component';
import {JwtModule} from '@auth0/angular-jwt';
import {HttpClientModule} from '@angular/common/http';
import {LoginComponent} from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MatchentryComponent,
    HighscoreComponent,
    MatchHistoryComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CustomMaterialModule,
    MatTableModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem('access_token');
        },
        // alles bei dem header ersetzt werden soll
        whitelistedDomains: ['http://localhost:8080'],
        // alles  bei dem header nicht ersetzt werden soll
        blacklistedRoutes: ['http://tennisClientID:KADFgni46agPQ@localhost:8080/oauth/token']
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
