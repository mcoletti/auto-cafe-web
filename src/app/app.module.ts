import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {ModalModule} from "ng2-modal";
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { InventoryComponent } from './inventory/inventory.component';
import {VehicleService} from "./_services/vehicle.service";
import {DealershipService} from "./_services/dealership.service";
import {AuthenticationService} from "./_services/authentication.service";
import {routing} from "./app.routes";
import { VehiclesComponent } from './inventory/vehicles/vehicles.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InventoryComponent,
    VehiclesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ModalModule,
    routing
  ],
  providers: [
    VehicleService,
    DealershipService,
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
