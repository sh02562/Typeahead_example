import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BootUserComponent } from './boot-user.component';

const routes: Routes = [
  {
    path: '', children: [
      { path: 'list', component: BootUserComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BootUserRoutingModule { }
