import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {NavMenuItem} from "../model/nav-menu-item";

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss']
})
export class NavItemComponent implements OnInit, OnDestroy {


  @Input()
  collapsed: boolean = false;

  @Input("item")
  set data(value: NavMenuItem) {
    this.item = value;
  }

  item: NavMenuItem | undefined;

  constructor() {
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

}
