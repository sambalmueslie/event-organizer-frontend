import {AfterViewInit, ChangeDetectorRef, Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from "@angular/material/sidenav";
import {Observable} from "rxjs";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {filter, map, shareReplay, withLatestFrom} from "rxjs/operators";
import {NavigationEnd, Router} from "@angular/router";
import {NavMenuItem} from "../model/nav-menu-item";

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit, AfterViewInit {

  @Input("items")
  set data(value: NavMenuItem[]) {
    this.items = value;
  }

  items: NavMenuItem[] = [];
  collapsed: boolean = false;
  lang: string = 'de';
  @ViewChild('drawer', {static: true}) drawer!: MatSidenav;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private changeDetectorRef: ChangeDetectorRef,
    private router: Router
  ) {
    router.events.pipe(
      withLatestFrom(this.isHandset$),
      filter(([a, b]) => b && a instanceof NavigationEnd)
    ).subscribe(_ => this.drawer.close());
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.changeDetectorRef.detectChanges();
  }

  toggleCollapsed() {
    this.collapsed = !this.collapsed;
  }
}
