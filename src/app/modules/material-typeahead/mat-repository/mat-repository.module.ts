import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatRepositoryRoutingModule } from './mat-repository-routing.module';
import { MatRepositoryComponent } from './mat-repository.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

@NgModule({
  declarations: [
    MatRepositoryComponent,
  ],
  imports: [
    CommonModule,
    MatRepositoryRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatAutocompleteModule
  ]
})
export class MatRepositoryModule { }
