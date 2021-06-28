import {AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {filter, map, shareReplay, withLatestFrom} from 'rxjs/operators';
import {TranslateService} from "@ngx-translate/core";
import {MatSidenav} from "@angular/material/sidenav";
import {NavigationEnd, Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {MatSelectChange} from "@angular/material/select";
import {NavMenuItem} from "../../shared/navigation/model/nav-menu-item";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit {

  items: NavMenuItem[] = [
    new NavMenuItem('/home', 'MENU.Home', 'home'),
    new NavMenuItem('/event', 'MENU.Event', 'event_note'),
    new NavMenuItem('/clan', 'MENU.Clan', 'question_answer'),
    new NavMenuItem('/admin', 'MENU.Admin', 'settings_applications'),
    new NavMenuItem('/imprint', 'MENU.Imprint', 'contact_support'),
  ];

  accessibleItems: NavMenuItem[] = [];
  collapsed: boolean = false;
  lang: string = 'de';

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private translate: TranslateService,
    private breakpointObserver: BreakpointObserver,
    private changeDetectorRef: ChangeDetectorRef,
    private router: Router,
    public dialog: MatDialog
  ) {
    translate.setDefaultLang('en');
    translate.use(this.lang);
  }

  ngOnInit() {
    this.accessibleItems = this.items;
  }

  ngAfterViewInit() {
    this.changeDetectorRef.detectChanges();
  }

  toggleCollapsed() {
    this.collapsed = !this.collapsed;
  }

  logout() {
    // const dialogRef = this.dialog.open(ConfirmLogoutDialogComponent, {
    //   width: '250px',
    //   data: ''
    // });
  }

  changeLang(event: MatSelectChange) {
    let value = event.value;
    this.translate.use(value)
  }

  selectLang(value: string) {
    this.lang = value;
    this.translate.use(this.lang)
  }

  submitIssue() {
    (window as any).showCollectorDialog()
  }
}
