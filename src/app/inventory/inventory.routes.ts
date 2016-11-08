import {InventoryComponent} from "./inventory.component";
import {Routes} from "@angular/router";
import {VehiclesComponent} from "./vehicles/vehicles.component";
/**
 * Created by micahcoletti on 10/28/16.
 */

export const inventoryRoutes :Routes = [
  {
    path: '',
    redirectTo: '/inventory',
    pathMatch: 'full'
  },
  {
    path: 'inventory',
    component: InventoryComponent
  },
  {
    path: 'inventory/vehicles/:id',
    component: InventoryComponent
  }
]
