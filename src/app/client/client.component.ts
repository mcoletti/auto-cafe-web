import { Component, OnInit } from '@angular/core';
import {ClientService} from "../_services/client.service";
import {Client} from "../_models/client";
import {LocationDetail} from "../_models/locationDetail";
import {Address} from "../_models/address";

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  clients:Client[];
  client:Client;
  errorMessage: string;
  constructor(private _ClientService:ClientService) {
    this.onGetClients();
    let phones: Array<string> = [''];
    let address = <Address>{street1:'',street2:'',city:'',state:'',zipCode:0,phones:phones};
    let locationDetail = <LocationDetail>{name:'',address:address};
    this.client = <Client>{name:'',locationDetails:locationDetail,created:'',modified:'',createdUser:'',modifiedUser:'',id:'',homePageText:''}
  }


  onSave(model){

  }

  /**
   * Get Client info by Id
   * @param clientId
   */
  onGetClient(clientId){
    console.log("Getting Client info for ClientId -  " + clientId);
    this._ClientService.getClient(clientId).subscribe(v => {
        this.client = v
      }, error => this.errorMessage = <any> error,
      () => console.log(this.client));
  }

  /**
   * Get List of Clients
   */
  onGetClients(){
    console.log("Getting list of Clients");
    this._ClientService.getClients().subscribe(v => {
        this.clients = v
      }, error => this.errorMessage = <any> error,
      () => console.log(this.clients));
  }


  ngOnInit() {
  }

}
