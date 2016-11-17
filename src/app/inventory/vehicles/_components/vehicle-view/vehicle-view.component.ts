import {Component, OnInit, Input} from '@angular/core';
import {Vehicle} from "../../../../_models/vehicle";

@Component({
  selector: 'vehicle-view',
  templateUrl: 'vehicle-view.component.html',
  styleUrls: ['vehicle-view.component.css']
})
export class VehicleViewComponent implements OnInit {
  @Input() vehicle:Vehicle;
  constructor() { }

  ngOnInit() {
  }

}
