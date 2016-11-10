/**
 * Created by micahcoletti on 11/2/16.
 */

import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Client} from "../_models/client";
import {Response, URLSearchParams, Http, Headers} from "@angular/http";
import {Configuration} from "../app.configuration";

@Injectable()
export class ClientService{

  headers:Headers;
  constructor(private _http:Http,private _config:Configuration){
    this.headers = new Headers();
    // this.headers.append('X-Authorization', 'Bearer ' + _authService.token);
    this.headers.append('Content-Type', 'application/json');
  }

  /**
   * Get a client by Id
   * @param clientId the client Id
   * @returns {Observable<R>}
   */
  getClient = (clientId:string): Observable<Client> => {

    let params: URLSearchParams = new URLSearchParams();
    params.set("clientId", clientId);

    return this._http.get(this._config.apiBaseUrl + "/client", {
      search: params,
      headers: this.headers
    }).map(this.extractJsonData).catch(this.handleError);

  }
  /**
   * Get the List off All Clients
   * @returns {Observable<R>}
   */
  getClients = (): Observable<Client[]> => {

    return this._http.get(this._config.apiBaseUrl + "/client/list", {
      headers: this.headers
    }).map(this.extractJsonData).catch(this.handleError);


  }
  /**
   * Extract the JSON result
   * @param res
   * @returns {any|{}}
   */
  private extractJsonData(res: Response) {
    return res.json() || {};
  }

  private extractTextData(res: Response) {
    return res.text() || {};
  }

  /**
   * Handle any errors we get back from the API calls
   * @param errorResponse
   * @returns {ErrorObservable}
   */
  private handleError(errorResponse: Response) {
    console.error(errorResponse);
    console.log(errorResponse.statusText);
    return Observable.throw(errorResponse.statusText || "Error");
  }

}
