import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {EventRoutingModule} from './event-routing.module';
import {EventHomeComponent} from './event-home/event-home.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {MaterialModule} from "../material/material.module";
import { EventListComponent } from './event-list/event-list.component';
import { AddEventComponent } from './add-event/add-event.component';
import { EventCardComponent } from './event-card/event-card.component';
import {TranslateModule} from "@ngx-translate/core";


@NgModule({
  declarations: [
    EventHomeComponent,
    EventListComponent,
    AddEventComponent,
    EventCardComponent
  ],
  imports: [
    CommonModule,
    EventRoutingModule,
    FlexLayoutModule,
    MaterialModule,
    TranslateModule
  ]
})
export class EventModule {
}
