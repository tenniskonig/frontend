import {NgModule} from '@angular/core';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatToolbarModule
} from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatCardModule, MatFormFieldModule,
    MatIconModule, MatInputModule, MatAutocompleteModule],
  exports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatCardModule, MatFormFieldModule,
    MatIconModule, MatInputModule, MatAutocompleteModule],
})
export class CustomMaterialModule {
}
