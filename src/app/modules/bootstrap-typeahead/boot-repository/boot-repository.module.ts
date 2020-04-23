import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BootRepositoryRoutingModule } from './boot-repository-routing.module';
import { BootRepositoryComponent } from './boot-repository.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';

@NgModule({
  declarations: [
    BootRepositoryComponent
  ],
  imports: [
    CommonModule,
    BootRepositoryRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    TypeaheadModule
  ]
})
export class BootRepositoryModule { }
