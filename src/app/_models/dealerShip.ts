import {Contact} from "./contact";
/**
 * Created by micahcoletti on 10/28/16.
 */
export interface DealerShip {
  id: string;
  clientId: string;
  name: string;
  headerTitle:string;
  contacts: Contact[];
}
