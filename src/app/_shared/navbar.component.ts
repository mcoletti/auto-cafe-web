import {Component, Input, OnInit} from "@angular/core";
import {AuthenticationService} from "../_services/authentication.service";
import {ClientService} from "../_services/client.service";
import {ActivatedRoute} from "@angular/router";
import {Client} from "../_models/client";
/**
 * Created by micahcoletti on 10/4/16.
 */

@Component({
  selector: 'navbar',
  templateUrl: 'navbar.component.html'
})
export class NavBarComponent{


  @Input() clientName: string;
  @Input() isAdmin:boolean;
  constructor() {
    // this.clientName = "Automatic Car Credit (ACC)";
  }


// constructor(private _authService: AuthenticationService) {
  //
  //   console.log(this._authService.getLocalStoredUser());
  //   this.showToolBar = this._authService.getLocalStoredUser() != "not logged in" ? true : false;
  // }


}
