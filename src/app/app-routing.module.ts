import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';

// Routen als Placeholder
const routes: Routes = [
  {path: 'SpielerErstellen', component: AppComponent},
  {path: 'SpielErstellen', component: AppComponent},
  {path: 'Bestenliste', component: AppComponent},
  {path: 'Matchverlauf', component: AppComponent},
  {path: 'Regeln', component: AppComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
