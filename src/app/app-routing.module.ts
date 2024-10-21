import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivGuardGuard } from './guards/priv-guard.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren:() => import('./pages/home/home.module').then (m =>m.HomeModule)
  },
  {
    path: 'private',
    loadChildren:() => import('./pages/private/private.module').then (m =>m.PrivateModule),
    canActivate: [PrivGuardGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
