import {Component, Input, OnInit} from "@angular/core";
import {Vehicle} from "../../../../_models/vehicle";
import {ActivatedRoute, Router, Params} from "@angular/router";
import {ClientService} from "../../../../_services/client.service";
import {VehicleService} from "../../../../_services/vehicle.service";
import {FileUploader} from "ng2-file-upload";
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
  @Input() vehicle: Vehicle;
  imageName: string;

  uploadFile: any;
  hasBaseDropZoneOver: boolean = false;
  options: Object = {
    url: 'http://localhost:4200/upload'
  };


  constructor() {


  }


  onFileChange(file) {


    console.log(file);
    var index = file.toString().lastIndexOf("\\")
    var fileName = file.toString().substring(index + 1, file.toString().length)
    // var imageUrl = "../../../inventory_images/" + file;
    // this.vehicle.imgUrl = "../../../inventory_images/" + file;

    console.log(fileName);
    this.vehicle.imgUrl =  fileName;
  }

  ngOnInit(): void {


  }

  handleUpload(data): void {
    if (data && data.response) {
      data = JSON.parse(data.response);
      this.uploadFile = data;
    }
  }

  fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }

}
