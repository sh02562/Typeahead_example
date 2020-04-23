import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BootUserRoutingModule } from './boot-user-routing.module';
import { BootUserComponent } from './boot-user.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';


@NgModule({
  declarations: [
    BootUserComponent
  ],
  imports: [
    CommonModule,
    BootUserRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    TypeaheadModule
  ]
})
export class BootUserModule { }
