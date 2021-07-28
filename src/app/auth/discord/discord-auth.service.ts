import {Injectable} from '@angular/core';
import {DiscordConfig} from "./discord-config";
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from "@angular/common/http";
import {catchError, retry} from "rxjs/operators";
import {throwError} from "rxjs";
import {ActivatedRoute, Params} from "@angular/router";

let authUrl: string = "https://discord.com/api/oauth2/authorize"
let tokenUrl: string = "https://discord.com/api/oauth2/token"
let revokeUrl: string = "https://discord.com/api/oauth2/token/revoke"

@Injectable({
  providedIn: 'root'
})
export class DiscordAuthService {

  private config: DiscordConfig | undefined;
  private code: string | undefined;

  constructor(private http: HttpClient, private activeRoute: ActivatedRoute) {
    this.activeRoute.queryParams.subscribe(p => this.handleParams(p))

  }

  setup(config: DiscordConfig) {
    this.config = config
  }

  private getAccessCode() {
    if (!this.config) return
    console.log("Get access code")
    // https://discord.com/api/oauth2/authorize?client_id=841369543330103318&redirect_uri=http%3A%2F%2Flocalhost%3A4200&response_type=code&scope=identify%20guilds
    const params = new HttpParams()
      .set('client_id', this.config.clientId)
      .set('redirect_uri', this.config.redirectUrl)
      .set('response_type', 'code')
      .set('scope', this.config.scope.join("%20"))
    const url = `${(authUrl)}?${params.toString()}`;
    const httpOptions = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded').set('Access-Control-Allow-Origin', '*')
    };
    this.http.get<string>(url, httpOptions)
      .pipe(
        retry(3),
        catchError((e) => DiscordAuthService.handleError(e))
      ).subscribe(data => this.getToken())
    ;
  }

  private static handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError('Something bad happened; please try again later.');
  }

  private getToken() {
    if (!this.config || !this.code) return
    console.log("Get token for " + this.code)
    const httpOptions = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    };
    // const body = {
    //   'client_id': this.config.clientId,
    //   'client_secret': this.config.clientSecret,
    //   'grant_type': 'authorization_code',
    //   'code': this.code,
    //   'redirect_uri': this.config.redirectUrl
    // }

    let body = new URLSearchParams();
    body.set('client_id',  this.config.clientId);
    body.set('client_secret', this.config.clientSecret);
    body.set('grant_type', 'authorization_code');
    body.set('code', this.code);
    body.set('redirect_uri', this.config.redirectUrl);

    this.http.post<string>(tokenUrl, body, httpOptions)
      .pipe(
        retry(3),
        catchError((e) => DiscordAuthService.handleError(e))
      ).subscribe(data => this.handleToken(data))
    ;

  }

  private handleParams(p: Params) {
    let code = p['code']
    if (code) {
      this.code = code
      console.log("Found code " + code)
      this.getToken()
    }
  }

  private handleToken(data: string) {
    console.log("Got token " + data)
  }
}
