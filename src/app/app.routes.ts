import {RouterModule, Routes} from "@angular/router";
import {inventoryRoutes} from "./inventory/inventory.routes";
import {clientRoutes} from "./client/client.routes";
/**
 * Created by micahcoletti on 10/28/16.
 */

export const routes:Routes = [
  ...inventoryRoutes,
  ...clientRoutes
];


export const routing = RouterModule.forRoot(routes);
