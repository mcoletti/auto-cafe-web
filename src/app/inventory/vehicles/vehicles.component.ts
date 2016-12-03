import {Component, Input, OnInit} from '@angular/core';
import {Vehicle} from "../../_models/vehicle";
import {VehicleService} from "../../_services/vehicle.service";
import {ActivatedRoute, Router, Params} from "@angular/router";
import {setTimeout} from "timers";



@Component({
  selector: 'vehicle-list',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit{



  @Input() vehicles: Vehicle[];
  detailLoaded: boolean = false;
  showEdit: boolean;
  errorMessage: string;
  successMessage: string;
  clientId:string;
  showSaveMessage:boolean;
  processing:boolean = false;
  constructor(private _vehicleService: VehicleService,private _route:ActivatedRoute,private _router:Router) {
    this.showEdit = true;
  }

  ngOnInit(): void {

      this._route.params.forEach((params: Params) => {

        this.clientId = params["clientId"];
        console.log(this.clientId);

      });

  }

  loadDetail(vehicle) {
    console.log(vehicle);
    this.detailLoaded = true;
    console.log(this.detailLoaded);

  }

  onSaveVehicle(model) {
    console.log("Saving Vehicle")
    this.processing = true;
    this._vehicleService.saveVehicle(model).subscribe(v => {
        this.successMessage = v
      }, error => this.errorMessage = <any> error,
      () => this.saveComplete(model.dealerId));
  }

  saveComplete(dealershipId){
    this.showSaveMessage = true;

    this._vehicleService.getVehicles(dealershipId).subscribe(v => {
        this.vehicles = v
      }, error => this.errorMessage = <any> error,
      () => console.log("Vehicle Saved"));

    this.processing = false;
    setTimeout(() => {
      this.showSaveMessage = false;
    }, 3500);
  }



}
//
// $(document).ready(function () {
//
//   alert("hellow there");
//
//   $('#vehiclesTable').DataTable({
//     "paging": true,
//     "ordering": false,
//     "info": false
//   });
//
// });

