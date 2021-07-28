import {Component, Inject, Input, OnInit} from '@angular/core';
import {DOCUMENT} from "@angular/common";
import {AuthService} from "@auth0/auth0-angular";

@Component({
  selector: 'app-nav-auth-item',
  templateUrl: './nav-auth-item.component.html',
  styleUrls: ['./nav-auth-item.component.scss']
})
export class NavAuthItemComponent implements OnInit {
  @Input()
  collapsed: boolean = false;

  constructor(
    @Inject(DOCUMENT) public document: Document,
    public auth: AuthService
  ) { }

  ngOnInit(): void {
  }

}
