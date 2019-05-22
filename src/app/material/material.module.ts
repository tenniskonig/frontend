import {NgModule} from '@angular/core';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule, MatDatepickerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule, 
  MatMenuModule,
  MatNativeDateModule,
  MatTableModule,
  MatRadioModule,

  MatToolbarModule
} from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatCardModule, MatFormFieldModule,
    MatIconModule, MatInputModule, MatAutocompleteModule, MatDatepickerModule, MatNativeDateModule,
    MatTableModule, MatMenuModule, MatRadioModule],
  exports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatCardModule, MatFormFieldModule,
    MatIconModule, MatInputModule, MatAutocompleteModule, MatDatepickerModule, MatNativeDateModule,
    MatTableModule, MatMenuModule, MatRadioModule],
})
export class CustomMaterialModule {
}
