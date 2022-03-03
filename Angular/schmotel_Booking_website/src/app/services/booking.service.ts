import { Subject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { IPastBooking } from '../Interfaces/IPastBooking';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  
   constructor(private http: HttpClient) { }

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
     
   let url="http://localhost:7000/booking/all/";

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
}


