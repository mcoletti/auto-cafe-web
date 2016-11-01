/**
 * Created by micahcoletti on 10/28/16.
 */

export interface Vehicle {
  dealerShipId: string;
  stockNum: string;
  vin: string;
  options: string;
  price: number;
  invoiceAmount: number;
  bodyStyle: string;
  extColor: string;
  intColor: string;
  mileage: number;
  make: string;
  model: string;
  year: number;
  trim: string;
  lotId: number;
  logLocation: string;
  imgUrl: string;
  createdUser: string;
  createdDtm: string;
  modifiedUser: string;
  modifiedDtm: string;

}
