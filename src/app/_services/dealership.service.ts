import { Injectable } from '@angular/core';
import {Http, Response, URLSearchParams, Headers} from "@angular/http";
import {Configuration} from "../app.configuration";
import {Observable} from "rxjs";
import {DealerShip} from "../_models/dealerShip";

@Injectable()
export class DealerShipService {

  headers:Headers;
  constructor(private _http:Http,private _config: Configuration) {
    this.headers = new Headers();
    // this.headers.append('X-Authorization', 'Bearer ' + _authService.token);
    this.headers.append('Content-Type', 'application/json');


  }


  /**
   * Get list of Vehicles from the API
   * @param dealerId the dealer id to filter for
   * @returns {Observable<R>}
   */
  getDealerShips = (clientId: string): Observable<DealerShip[]> => {

    let params: URLSearchParams = new URLSearchParams();
    params.set("clientId", clientId);

    return this._http.get(this._config.apiBaseUrl + "/dealership/list", {
      search: params,
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
