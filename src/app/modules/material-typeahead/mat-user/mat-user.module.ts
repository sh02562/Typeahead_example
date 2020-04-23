import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatUserRoutingModule } from './mat-user-routing.module';
import { MatUserComponent } from './mat-user.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';


@NgModule({
  declarations: [
    MatUserComponent
  ],
  imports: [
    CommonModule,
    MatUserRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatAutocompleteModule
  ]
})
export class MatUserModule { }
