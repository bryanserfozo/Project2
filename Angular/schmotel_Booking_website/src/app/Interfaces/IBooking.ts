import { IHotel } from "./IHotel";

export interface IBooking {
    hotel?: IHotel,
    checkIn: string,
    checkOut: string,
    numAdults: number,
  }