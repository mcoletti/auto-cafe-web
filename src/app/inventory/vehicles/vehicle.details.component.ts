import {Component, Input} from "@angular/core";
import {Vehicle} from "../../_models/vehicle";
/**
 * Created by micahcoletti on 11/2/16.
 */

@Component({
  selector: 'vehicle-detail',
  templateUrl: 'vehicle.details.component.html'
})

export class VehicleDetailsComponent {

  @Input() vehicle:Vehicle;
  constructor() {
  }
}
