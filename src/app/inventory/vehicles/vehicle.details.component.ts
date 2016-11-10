import {Component, Input, OnInit} from "@angular/core";
import {Vehicle} from "../../_models/vehicle";
import {ActivatedRoute, Router, Params} from "@angular/router";
import {ClientService} from "../../_services/client.service";
import {VehicleService} from "../../_services/vehicle.service";
/**
 * Created by micahcoletti on 11/2/16.
 */

@Component({
  selector: 'vehicle-detail',
  templateUrl: 'vehicle.details.component.html'
})

export class VehicleDetailsComponent implements OnInit {


  @Input() stockNum: string;
  @Input() dealershipId: string;
  errorMessage: string;
 @Input() vehicle: Vehicle;

  constructor() {


  }

  ngOnInit(): void {


  }

}
