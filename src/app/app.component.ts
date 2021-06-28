import {Component} from '@angular/core';
import {JwksValidationHandler, OAuthErrorEvent, OAuthService} from "angular-oauth2-oidc";
import {authConfig} from "./auth-config";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'EventOrganizer';

  constructor(private oauthService: OAuthService) {
    this.setupOAuth();
  }

  private setupOAuth() {
    this.oauthService.events.subscribe(event => {
      if (event instanceof OAuthErrorEvent) {
        console.error('OAuthErrorEvent Object:', event);
      } else {
        console.warn('OAuthEvent Object:', event);
      }
    });

    this.oauthService.configure(authConfig);
    this.oauthService.tryLogin({
      onLoginError: params => {
        console.error("login error")
      },
      onTokenReceived: receivedTokens => {
        console.log(JSON.stringify(receivedTokens))
      }
    })
    this.oauthService.initCodeFlow()
    this.oauthService.setupAutomaticSilentRefresh();
  }

}
