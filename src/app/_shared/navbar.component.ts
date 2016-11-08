import {Component, Input} from "@angular/core";
import {AuthenticationService} from "../_services/authentication.service";
/**
 * Created by micahcoletti on 10/4/16.
 */

@Component({
  selector: 'navbar',
  templateUrl: 'navbar.component.html'
})
export class NavBarComponent {

  @Input() clientName: string;


  constructor() {
    this.clientName = "Automatic Car Credit (ACC)";
  }

// constructor(private _authService: AuthenticationService) {
  //
  //   console.log(this._authService.getLocalStoredUser());
  //   this.showToolBar = this._authService.getLocalStoredUser() != "not logged in" ? true : false;
  // }


}