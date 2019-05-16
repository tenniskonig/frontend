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
import {MatchHistoryComponent} from './match-history/match-history.component';
import {JwtModule} from '@auth0/angular-jwt';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {LoginComponent} from './login/login.component';
import {RulesComponent} from './rules/rules.component';
import {MAT_DATE_LOCALE} from '@angular/material';
import {JwtHttpInterceptor} from './services/httpInterceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MatchentryComponent,
    HighscoreComponent,
    MatchHistoryComponent,
    LoginComponent,
    RulesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CustomMaterialModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem('access_token');
        },
        // alles bei dem header ersetzt werden soll
        whitelistedDomains: new Array(new RegExp('^null$'))

  ,
        // alles  bei dem header nicht ersetzt werden soll
        blacklistedRoutes: ['tennisClientID:KADFgni46agPQ@localhost:8080/oauth/token'],
        headerName: 'Authorization'
      }
    }),
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'de-DE'},
    { provide: HTTP_INTERCEPTORS, useClass: JwtHttpInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
