import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EventHomeComponent} from "./event-home/event-home.component";

const routes: Routes = [
  {path: '', component: EventHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventRoutingModule {
}
