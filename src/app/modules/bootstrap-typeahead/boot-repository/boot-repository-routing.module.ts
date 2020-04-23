import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BootRepositoryComponent } from './boot-repository.component';

const routes: Routes = [
  {
    path: '', children: [
      { path: 'list', component: BootRepositoryComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BootRepositoryRoutingModule { }
