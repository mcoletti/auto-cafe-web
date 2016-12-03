import {Component, OnInit, OnDestroy} from '@angular/core';
import {DealerShip} from "../_models/dealerShip";
import {DealerShipService} from "../_services/dealership.service";
import {Vehicle} from "../_models/vehicle";
import {VehicleService} from "../_services/vehicle.service";
import {ActivatedRoute, Params} from "@angular/router";
import {ClientService} from "../_services/client.service";
import {Client} from "../_models/client";

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  dealerShips: DealerShip[];
  dealerShip: DealerShip;
  dealerShipId:string;
  selectedDealerShipName: string;
  errorMessage: string;
  vehicles: Vehicle[];
  sub: any;
  clientId: string;
  client: Client;
  isAdmin: boolean;
  dealerShipName:string;
  constructor(private route: ActivatedRoute, private _dealerShipService: DealerShipService, private _vehicleService: VehicleService, private _clientService: ClientService) {


    this.client = <Client>{name: ''}
    // this.clientId = "ad92e832-9830-49a5-98b5-9f9365fd20bd";
    this.isAdmin = true;
    // this._dealerShipService.getDealerShips("ad92e832-9830-49a5-98b5-9f9365fd20bd").subscribe(v => {
    //     this.dealerShips = v
    //   }, error => this.errorMessage = <any> error,
    //   () => console.log(this.dealerShips));


  }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.clientId = params["clientId"];
    });

    this._dealerShipService.getDealerShips(this.clientId).subscribe(v => {
        this.dealerShips = v
      }, error => this.errorMessage = <any> error,
      () => console.log("Get The list of DealerShips"));

    this._clientService.getClient(this.clientId).subscribe(v => {
        this.client = v
      }, error => this.errorMessage = <any> error,
      () => console.log("Got the Client Data"));


    //
    // if(this.dealerShipId != null){
    //   this.getVehicles(this.dealerShipId);
    // }


  }

  // ngOnDestroy() {
  //   this.sub.unsubscribe();
  // }

  getVehicles(dealerShip:DealerShip) {

    let dealerShipId = dealerShip.id;

    if(typeof dealerShipId == "string"){
      console.log("Getting vehicles for DealerId " + dealerShipId);
      this.dealerShipName = dealerShip.name;
      this._vehicleService.getVehicles(dealerShipId).subscribe(v => {
          this.vehicles = v
        }, error => this.errorMessage = <any> error,
        () => console.log("Done"));
    }



  }
}
