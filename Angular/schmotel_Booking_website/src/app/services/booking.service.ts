
import { Subject, Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { catchError, lastValueFrom } from 'rxjs';
import { IUser } from '../Interfaces/IUser';
import { IPastBooking } from '../Interfaces/IPastBooking';
import { IBooking } from '../Interfaces/IBooking';
import { IEmailObject } from '../Interfaces/IEmailObject';


@Injectable({
  providedIn: 'root'
})
export class BookingService {
  
   

   pastBooking : IPastBooking[] = [];

   entry: IPastBooking = {
    bookingId: 0,
    bookingDate: "",
    checkInDate: "",
    checkOutDate: "",
    hotel: 0,
    numNights: 0,
    user: {
      id : 0,
    firstName : "",
    lastName : "",
    username : "",
    email : "",
    password : "",
    phoneNumber : ""
    }
   }

   bookingSubject:Subject<IPastBooking[]> = new Subject<IPastBooking[]>();


   async getPastBooking(user_id: number)
   {
     this.pastBooking = [];
   let headers = new HttpHeaders()
     .set('Content-Type', 'application/json')
     .set('id', user_id.toString())
     
   let url="http://35.226.38.161:7000/booking/all/";

   let bookingInfo = (
     this.http.get<IPastBooking[]>(url, { headers: headers })
   ).subscribe((data) => {
     console.log(data);
     this.pastBooking = data;
     this.bookingSubject.next(this.pastBooking);
   })


    /*for(let i = 0 ; i < bookingInfo.length; i++) {
       
      console.log(bookingInfo);

      this.entry.booking_id = bookingInfo[i].bookingId;
      this.entry.booking_date = bookingInfo[i].bookingDate;
      this.entry.check_in_date = bookingInfo[i].checkInDate;
      this.entry.check_out_date = bookingInfo[i].checkOutDate;
      this.entry.hotel_id = bookingInfo[i].hotel;
      this.entry.user_id = bookingInfo[i].user.id;
      this.entry.num_nights = bookingInfo[i].numNights;

      console.log(this.entry);

      this.pastBooking.push(this.entry);
/*
      console.log(this.pastBooking);

      
      this.entry.booking_id = 0;
      this.entry.booking_date = "";
      this.entry.check_in_date = "";
      this.entry.check_out_date = "";
      this.entry.hotel_id = 0;
      this.entry.user_id = 0;
      this.entry.num_nights = 0;
      
      console.log(this.pastBooking);
      
    }*/
   
 }

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
        'http://35.226.38.161:7000/booking/',
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

  emailDraft:IEmailObject = {
    email:'',
    message: ''
  }


  sendEmail(
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
  ):Observable<IEmailObject>{
    this.emailDraft.email = email

    this.emailDraft.message = "We'd like to thank you, " + nameReservation + " for booking your stay at the lovely " + 
    hotelName + " located at " + hotelAddress + ". Your Check-In is on " + checkInDate + " for a room built to accomodate " + 
    numAdults + " adults. Your reserved Check-Out is on " + checkOutDate + ", resulting in a total of " +
    numNights + " nights. At a rate of " + price + " per night, a total of " + totalCost + " has been charged to the card with number: " +
    cardNumber + ". Thank you and have a wonderful day!"
    
    console.log(JSON.stringify(this.emailDraft))
    // console.log(email, this.message)
    return this.http.post<IEmailObject>('http://35.226.38.161:7000/email/',
        JSON.stringify(this.emailDraft),
        { headers: { 'Content-Type': 'application/json' } }
      )
      .pipe(
        catchError((e) => {
          return throwError(e);
        })
      );
  }

  constructor(private http:HttpClient) { }
}

