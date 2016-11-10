import {LocationDetail} from "./locationDetail";
/**
 * Created by micahcoletti on 11/2/16.
 */
export interface Client {
  id:string;
  name: string;
  homePageText:string;
  locationDetails: LocationDetail;
  created:string;
  createdUser:string;
  modified:string;
  modifiedUser:string;
}
