import {AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {AuthService} from "@auth0/auth0-angular";
import {MatSidenav} from "@angular/material/sidenav";
import {Observable} from "rxjs";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {filter, map, shareReplay, withLatestFrom} from "rxjs/operators";
import {NavigationEnd, Router} from "@angular/router";
import {MatSelectChange} from "@angular/material/select";
import {TranslateService} from "@ngx-translate/core";

export class NavMenuItem {
  constructor(
    public url: string,
    public text: string,
    public icon: string
  ) {
  }
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'EventOrganizer';
  items: NavMenuItem[] =  [
    new NavMenuItem('/home', 'MENU.Home', 'home'),
    new NavMenuItem('/event', 'MENU.Event', 'event_note'),
    new NavMenuItem('/clan', 'MENU.Clan', 'question_answer'),
    new NavMenuItem('/admin', 'MENU.Admin', 'settings_applications'),
    new NavMenuItem('/imprint', 'MENU.Imprint', 'contact_support'),
  ];

  accessibleItems: NavMenuItem[] = [];
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
    private router: Router,
    public auth: AuthService,
    private translate: TranslateService,
  ) {
    translate.setDefaultLang('en');
    translate.use(this.lang);
    router.events.pipe(
      withLatestFrom(this.isHandset$),
      filter(([a, b]) => b && a instanceof NavigationEnd)
    ).subscribe(_ => this.drawer.close());
  }

  ngOnInit(): void {
    this.accessibleItems = this.items;
  }


  ngAfterViewInit() {
    this.changeDetectorRef.detectChanges();
  }

  toggleCollapsed() {
    this.collapsed = !this.collapsed;
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
