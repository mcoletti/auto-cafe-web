import { Injectable } from '@angular/core';
import {Http, Response, URLSearchParams, Headers} from "@angular/http";
import {Configuration} from "../app.configuration";
import {Observable} from "rxjs";
import {Vehicle} from "../_models/vehicle";

@Injectable()
export class VehicleService {

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
  getVehicles = (dealerId: string): Observable<Vehicle[]> => {

    let params: URLSearchParams = new URLSearchParams();
    params.set("dealerId", dealerId);

    return this._http.get(this._config.apiBaseUrl + "/vehicle/list", {
      search: params,
      headers: this.headers
    }).map(this.extractJsonData).catch(this.handleError);

  }

  getVehicle = (dealershipId: string,stockNum:string): Observable<Vehicle> => {

    let params: URLSearchParams = new URLSearchParams();
    params.set("dealershipId", dealershipId);
    params.set("stockNum", stockNum);

    return this._http.get(this._config.apiBaseUrl + "/vehicle", {
      search: params,
      headers: this.headers
    }).map(this.extractJsonData).catch(this.handleError);

  }

  saveVehicle = (vehicle:Vehicle): Observable<string> => {
    console.log("Saving Vehicle");
    console.log(vehicle);
    return this._http.post(this._config.apiBaseUrl + "/vehicle", JSON.stringify(vehicle), {headers: this.headers}).map(this.extractTextData).catch(this.handleError);

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
