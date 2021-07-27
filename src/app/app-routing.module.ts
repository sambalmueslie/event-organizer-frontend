import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from "@auth0/auth0-angular";

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
  {path: 'event', loadChildren: () => import('./event/event.module').then(m => m.EventModule), canActivate: [AuthGuard]},
  {path: 'clan', loadChildren: () => import('./clan/clan.module').then(m => m.ClanModule), canActivate: [AuthGuard]},
  {path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule), canActivate: [AuthGuard]},
  {path: 'imprint', loadChildren: () => import('./imprint/imprint.module').then(m => m.ImprintModule)},
  {path: '**', loadChildren: () => import('./error/error.module').then(m => m.ErrorModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
