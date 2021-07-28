import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EventHomeComponent} from "./event-home/event-home.component";
import {EventChangeComponent} from "./event-change/event-change.component";

const routes: Routes = [
  {path: '', component: EventHomeComponent},
  {path: 'create', component: EventChangeComponent},
  {path: 'edit/:id', component: EventChangeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventRoutingModule {
}
