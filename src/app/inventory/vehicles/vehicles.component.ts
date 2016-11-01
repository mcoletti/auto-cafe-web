import { Component, OnInit } from '@angular/core';
import {VehicleService} from "../../_services/vehicle.service";
import {Vehicle} from "../../_models/vehicle";

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {

  vehicles:Vehicle[];
  errorMessage: string;
  constructor(private _vehicleService:VehicleService) { }

  ngOnInit() {
  }

  onGetVehicles(dealerShipId:string){


    this._vehicleService.getVehicles(dealerShipId).subscribe(v => {
        this.vehicles = v
      }, error => this.errorMessage = <any> error,
      () => console.log("Done getting list of Vehicles"));

  }

}
