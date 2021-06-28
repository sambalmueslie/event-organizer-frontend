import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeRoutingModule} from './home-routing.module';
import {DashboardComponent} from './dashboard/dashboard.component';
import {MaterialModule} from "../material/material.module";
import {FlexLayoutModule} from "@angular/flex-layout";
import {TranslateModule} from "@ngx-translate/core";
import {NavigationModule} from "../shared/navigation/navigation.module";



@NgModule({
  declarations: [
    DashboardComponent
  ],
  exports: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    TranslateModule,
    NavigationModule
  ]
})
export class HomeModule {
}
