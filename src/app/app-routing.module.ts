import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren:() => import('./pages/home/home.module').then (m =>m.HomeModule)
  },
  {
    path: 'private',
    loadChildren:() => import('./pages/private/private.module').then (m =>m.PrivateModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
