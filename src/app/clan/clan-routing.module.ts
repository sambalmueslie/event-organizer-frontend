import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ClanHomeComponent} from "./clan-home/clan-home.component";

const routes: Routes = [
  {path: '', component: ClanHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClanRoutingModule {
}
