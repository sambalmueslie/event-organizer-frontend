import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ImprintHomeComponent} from "./imprint-home/imprint-home.component";

const routes: Routes = [
  {path: '', component: ImprintHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImprintRoutingModule {
}
