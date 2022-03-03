
import { Injectable } from '@angular/core';
import { IUser } from '../Interfaces/IUser';
import { IBooking } from '../Interfaces/IBooking';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, lastValueFrom } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BookingService {


  today = new Date();
  dd = String(this.today.getDate()).padStart(2, '0');
  mm = String(this.today.getMonth() + 1).padStart(2, '0'); //January is 0!
  yyyy = this.today.getFullYear();

  bookingDate:string  = this.yyyy + '-' + this.mm + '-' + this.dd;

  

  create(
    bookingId:number,
    user: IUser,
    hotel: number,
    checkInDate: string,
    checkOutDate: string,
    numNights: number
  ): Observable<IBooking> {
    console.log(this.bookingDate)
    return this.http
      .post<IBooking>(
        'http://localhost:7000/booking/',
        JSON.stringify({
          bookingId,
          user,
          hotel,
          bookingDate: this.bookingDate,
          checkInDate,
          checkOutDate,
          numNights
        }),
        { headers: { 'Content-Type': 'application/json' } }
      )
      .pipe(
        catchError((e) => {
          return throwError(e);
        })
      );
  }

  message:string = ""

  async sendEmail(
    email:string,
    hotelName: string,
    hotelAddress : string,
    checkInDate: string,
    checkOutDate :string,
    numAdults : number,
    numNights: number,
    price : string,
    totalCost : string,
    nameReservation : string,
    cardNumber: number
  ){
    this.message = "We'd like to thank you, " + nameReservation + " for booking your stay at the lovely " + 
    hotelName + " located at " + hotelAddress + ". Your Check-In is on " + checkInDate + " for a room built to accomodate " + 
    numAdults + " adults. Your reserved Check-Out is on " + checkOutDate + ", resulting in a total of " +
    numNights + " nights. At a rate of " + price + " per night, a total of " + totalCost + " has been charged to the card with number: " +
    cardNumber + ". Thank you and have a wonderful day!"
    
    console.log(JSON.stringify({
      email,
      message: this.message
    }))
    // console.log(email, this.message)
    await this.http.post<void>('http://localhost:7000/email/',
        JSON.stringify({
          email,
          message: this.message
        }),
        { headers: { 'Content-Type': 'application/json' } }
      )
      .pipe(
        catchError((e) => {
          return throwError(e);
        })
      );
    console.log("email sent")
  }

  constructor(private http:HttpClient) { }
}

