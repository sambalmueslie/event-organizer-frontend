import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdminRoutingModule} from './admin-routing.module';
import {AdminHomeComponent} from './admin-home/admin-home.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {MaterialModule} from "../material/material.module";


@NgModule({
  declarations: [
    AdminHomeComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FlexLayoutModule,
    MaterialModule
  ]
})
export class AdminModule {
}
