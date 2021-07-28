import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {EventRoutingModule} from './event-routing.module';
import {EventHomeComponent} from './event-home/event-home.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {MaterialModule} from "../material/material.module";
import {EventListComponent} from './event-list/event-list.component';
import {EventCardComponent} from './event-card/event-card.component';
import {TranslateModule} from "@ngx-translate/core";
import { EventChangeComponent } from './event-change/event-change.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    EventHomeComponent,
    EventListComponent,
    EventCardComponent,
    EventChangeComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EventRoutingModule,
    FlexLayoutModule,
    MaterialModule,
    TranslateModule
  ]
})
export class EventModule {
}
