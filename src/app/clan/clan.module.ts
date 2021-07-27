import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ClanRoutingModule} from './clan-routing.module';
import {ClanHomeComponent} from './clan-home/clan-home.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {MaterialModule} from "../material/material.module";


@NgModule({
  declarations: [
    ClanHomeComponent
  ],
  imports: [
    CommonModule,
    ClanRoutingModule,
    FlexLayoutModule,
    MaterialModule
  ]
})
export class ClanModule {
}
