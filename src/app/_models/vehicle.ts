/**
 * Created by micahcoletti on 10/28/16.
 */

export interface Vehicle {
  dealerId: string;
  stockNum: string;
  shortDescription:string;
  vin: string;
  options: string;
  price: number;
  priceFormatted: string;
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
  lotLocation: string;
  imgUrl: string;
  createdUser: string;
  createdDtm: string;
  modifiedUser: string;
  modifiedDtm: string;

}
