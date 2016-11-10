import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ClientService} from "./_services/client.service";
import {Client} from "./_models/client";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'app works!';

  clientName:string;
  // sub: any;
  // clientId: string;
  // client:Client;
  // errorMessage:string;
  constructor() {
    // this.clientName = "Automatic Car Credit (ACC)";
  }

  ngOnInit(): void {

    // console.log("Getting client Info")
    // this.sub = this.route.params.subscribe(params => {
    //   this.clientId = params['clientId'];
    // });
    //
    // if(this.clientId != null){
    //   this._clientService.getClient(this.clientId).subscribe(v => {
    //       this.client = v
    //     }, error => this.errorMessage = <any> error,
    //     () => this.completePageLoad());
    // }

  }
  // completePageLoad(){
  //   this.clientName = this.client.name;
  // }
}
