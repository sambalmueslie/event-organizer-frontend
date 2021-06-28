import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
  {path: 'event', loadChildren: () => import('./event/event.module').then(m => m.EventModule)},
  {path: 'clan', loadChildren: () => import('./clan/clan.module').then(m => m.ClanModule)},
  {path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)},
  {path: 'imprint', loadChildren: () => import('./imprint/imprint.module').then(m => m.ImprintModule)},
  {path: '**', loadChildren: () => import('./error/error.module').then(m => m.ErrorModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
