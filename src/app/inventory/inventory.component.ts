import {Component, OnInit, OnDestroy} from '@angular/core';
import {DealerShip} from "../_models/dealerShip";
import {DealerShipService} from "../_services/dealership.service";
import {Vehicle} from "../_models/vehicle";
import {VehicleService} from "../_services/vehicle.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit,OnDestroy {
  dealerShips: DealerShip[];
  errorMessage: string;
  vehicles: Vehicle[];
  sub: any;
  dealerShipId: string;
  constructor(private route: ActivatedRoute,private _dealerShipService: DealerShipService,private _vehicleService: VehicleService) {


    this._dealerShipService.getDealerShips("1daa3920-c111-43bc-9dc3-a412e133688f").subscribe(v => {
        this.dealerShips = v
      }, error => this.errorMessage = <any> error,
      () => console.log(this.dealerShips));


  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.dealerShipId = params['id'];
    })

    if(this.dealerShipId != null){
      this.getVehicles(this.dealerShipId);
    }


  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getVehicles(dealerShipId: string) {

    console.log("Getting vehicles for DealerId " + dealerShipId);
    this._vehicleService.getVehicles(dealerShipId).subscribe(v => {
        this.vehicles = v
      }, error => this.errorMessage = <any> error,
      () => console.log(this.vehicles));

  }



}
