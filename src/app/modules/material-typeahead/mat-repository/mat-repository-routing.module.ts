import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatRepositoryComponent } from './mat-repository.component';

const routes: Routes = [
  {
    path: '', children: [
      { path: 'list', component: MatRepositoryComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatRepositoryRoutingModule { }
