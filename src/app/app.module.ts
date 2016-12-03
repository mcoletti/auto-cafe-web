import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {ModalModule} from "ng2-modal";
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { InventoryComponent } from './inventory/inventory.component';
import {VehicleService} from "./_services/vehicle.service";
import {AuthenticationService} from "./_services/authentication.service";
import {routing} from "./app.routes";
import { VehiclesComponent } from './inventory/vehicles/vehicles.component';
import {NavBarComponent} from "./_shared/navbar.component";
import {Configuration} from "./app.configuration";
import {DealerShipService} from "./_services/dealership.service";
import {VehicleDetailsComponent} from "./inventory/vehicles/_components/vehicle-details/vehicle.details.component";
import { ClientComponent } from './client/client.component';
import {ClientService} from "./_services/client.service";
import { ClientDetailComponent } from './client/client-detail/client-detail.component';
import { VehicleViewComponent } from './inventory/vehicles/_components/vehicle-view/vehicle-view.component';
import { DealerSelectorComponent } from './inventory/vehicles/_components/dealer-selector/dealer-selector.component';
import {DataTableDirectives} from "angular2-datatable2/datatable";
import {CustomCurrencyPipe} from "./_directives/custom-currency-pipe";
import {CurrencyDirective} from "./_directives/currency-directive";
import {SpinnerComponent} from "./_shared/spinner.component";
import {FileUploader, FileUploadModule,} from "ng2-file-upload";
import {ImageUploadComponent} from "./inventory/vehicles/_components/image-upload/image-upload.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InventoryComponent,
    VehiclesComponent,
    NavBarComponent,
    VehicleDetailsComponent,
    ClientComponent,
    ClientDetailComponent,
    VehicleViewComponent,
    DealerSelectorComponent,
    DataTableDirectives,
    CurrencyDirective,
    SpinnerComponent,
    ImageUploadComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ModalModule,
    routing,
    FileUploadModule

  ],
  providers: [
    VehicleService,
    AuthenticationService,
    Configuration,
    DealerShipService,
    ClientService,
    CustomCurrencyPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
