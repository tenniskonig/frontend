import {NgModule} from '@angular/core';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule, MatDatepickerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule, MatMenuModule, MatNativeDateModule, MatTableModule,
  MatToolbarModule
} from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatCardModule, MatFormFieldModule,
    MatIconModule, MatInputModule, MatAutocompleteModule, MatDatepickerModule, MatNativeDateModule,
    MatTableModule, MatMenuModule],
  exports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatCardModule, MatFormFieldModule,
    MatIconModule, MatInputModule, MatAutocompleteModule, MatDatepickerModule, MatNativeDateModule,
    MatTableModule, MatMenuModule],
})
export class CustomMaterialModule {
}
