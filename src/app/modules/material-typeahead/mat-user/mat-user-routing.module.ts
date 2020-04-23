import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatUserComponent } from './mat-user.component';

const routes: Routes = [
  {
    path: '', children: [
      { path: 'list', component: MatUserComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatUserRoutingModule { }
