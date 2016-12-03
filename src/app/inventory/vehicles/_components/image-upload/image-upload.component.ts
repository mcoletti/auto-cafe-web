import { Component, OnInit } from '@angular/core';
import {FileUploader, Headers} from "ng2-file-upload";
import {Configuration} from "../../../../app.configuration";


@Component({
  selector: 'image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent implements OnInit {
  public uploader:FileUploader;
  public hasBaseDropZoneOver:boolean = false;
  public hasAnotherDropZoneOver:boolean = false;
  private BASE_URL:string;

  constructor(private config: Configuration) {
    // this.BASE_URL = config.apiBaseUrl;
    // let headers = new Array<Headers>();
    // let header = <Headers>{name:"Access-Control-Allow-Origin",value:"http://localhost:4200"}
    // headers.push(header);
    // // headers.fill(header,0,1);
    // this.uploader =  new FileUploader({url: this.BASE_URL + "/vehicle/file",headers: headers});
    // this.headers.append('X-Authorization', 'Bearer ' + _authService.token);
    // headers.append('Access-Control-Allow-Origin', 'http://localhost:4200');


  }

  ngOnInit() {

    this.BASE_URL = this.config.apiBaseUrl;
    let headers = new Array<Headers>();
    let header = <Headers>{name:"Access-Control-Allow-Origin",value:"http://localhost:4200"}
    headers.push(header);
    // headers.fill(header,0,1);
    this.uploader =  new FileUploader({url: this.BASE_URL + "/vehicle/file",headers: headers});
    // this.headers.append('X-Authorization', 'Bearer ' + _authService.token);
    // headers.append('Access-Control-Allow-Origin', 'http://localhost:4200');

  }

  public fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }

  public fileOverAnother(e:any):void {
    this.hasAnotherDropZoneOver = e;
  }
}
