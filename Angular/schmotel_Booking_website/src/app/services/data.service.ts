import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IBooking } from '../Interfaces/IBooking';
import { IHotel } from '../Interfaces/IHotel';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private hotel:IHotel = {
    id: 0,
    hotelName: "",
    rating: "",
    price: "",
    thumbnailUrl: ""
  }

  private bookingHotel = new BehaviorSubject<IHotel>(this.hotel)

  currentHotel = this.bookingHotel.asObservable();

  changeHotel(newHotel:IHotel){
    this.bookingHotel.next(newHotel)
  }

  private bookingInfo = new BehaviorSubject<IBooking>({
      hotel: this.hotel,
      checkIn: '',
      checkOut: '',
      numAdults: 0,
    }
  )

  currentBooking = this.bookingInfo.asObservable();

  changeBooking(newBooking:IBooking){
    this.bookingInfo.next(newBooking)
  }

  constructor() { }
}
