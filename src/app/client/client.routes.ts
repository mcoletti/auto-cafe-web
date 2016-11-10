import {Routes} from "@angular/router";
import {ClientComponent} from "./client.component";
/**
 * Created by micahcoletti on 11/10/16.
 */

export const clientRoutes :Routes = [
  {
    path: '',
    redirectTo: '/client',
    pathMatch: 'full'
  },
  {
    path: 'client',
    component: ClientComponent

  }
]
