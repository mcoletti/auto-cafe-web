import {Component, Input} from '@angular/core';
import {Vehicle} from "../../_models/vehicle";

@Component({
  selector: 'vehicle-list',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent {


  @Input() vehicles: Vehicle[];
  detailLoaded:boolean = false;
  constructor() {

  }

  loadDetail(vehicle){
    console.log(vehicle);
    this.detailLoaded = true;
    console.log(this.detailLoaded);

  }

}
