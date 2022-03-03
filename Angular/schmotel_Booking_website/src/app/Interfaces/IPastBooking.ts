import { IUser } from "./IUser";

export interface IPastBooking {
    bookingId: number;
    bookingDate: string;
    checkInDate: string;
    checkOutDate: string;
    hotel: number;
    numNights: number;
    user: IUser;
}