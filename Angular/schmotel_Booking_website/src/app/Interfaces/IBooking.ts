import { IUser } from "./IUser";

export interface IBooking {
    bookingId:number,
    user: IUser
    hotel: number,
    checkIn: string,
    checkOut: string,
    numNights: number
  }