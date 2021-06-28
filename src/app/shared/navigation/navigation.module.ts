import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavItemComponent} from './nav-item/nav-item.component';
import {MaterialModule} from "../../material/material.module";
import {FlexLayoutModule} from "@angular/flex-layout";
import {TranslateModule} from "@ngx-translate/core";
import {MainNavComponent} from './main-nav/main-nav.component';
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    NavItemComponent,
    MainNavComponent
  ],
  exports: [
    MainNavComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    TranslateModule,
    RouterModule
  ]
})
export class NavigationModule {
}
