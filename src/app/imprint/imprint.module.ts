import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ImprintRoutingModule} from './imprint-routing.module';
import {ImprintHomeComponent} from './imprint-home/imprint-home.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {MaterialModule} from "../material/material.module";


@NgModule({
  declarations: [
    ImprintHomeComponent
  ],
  imports: [
    CommonModule,
    ImprintRoutingModule,
    FlexLayoutModule,
    MaterialModule
  ]
})
export class ImprintModule {
}
