import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BootstrapTypeaheadComponent } from './modules/bootstrap-typeahead/bootstrap-typeahead.component';
import { PageNotFoundComponent } from './modules/page-not-found/page-not-found.component';
import { MaterialTypeaheadComponent } from './modules/material-typeahead/material-typeahead.component';

const routes: Routes = [
  { path: '', redirectTo: 'bootstrap-typeahead', pathMatch: 'full' },
  {
    path: 'bootstrap-typeahead', component: BootstrapTypeaheadComponent,
    children: [
      { path: 'boot-repository', loadChildren: () => import(`./modules/bootstrap-typeahead/boot-repository/boot-repository.module`).then(m => m.BootRepositoryModule) },
      { path: 'boot-user', loadChildren: () => import(`./modules/bootstrap-typeahead/boot-user/boot-user.module`).then(m => m.BootUserModule) },
    ]
  },
  {
    path: 'material-typeahead', component: MaterialTypeaheadComponent,
    children: [
      { path: 'mat-repository', loadChildren: () => import(`./modules/material-typeahead/mat-repository/mat-repository.module`).then(m => m.MatRepositoryModule) },
      { path: 'mat-user', loadChildren: () => import(`./modules/material-typeahead/mat-user/mat-user.module`).then(m => m.MatUserModule) },
    ]
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
