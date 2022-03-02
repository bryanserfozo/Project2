import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IBooking } from '../Interfaces/IBooking';
import { IHotel } from '../Interfaces/IHotel';
import { IUser } from '../Interfaces/IUser';

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

  private loggedIn =new BehaviorSubject<IUser>({
    id: 0,
    email: '',
    username: '',
    firstName: '',
    lastName: '',
    password: '',
    phoneNumber: '1234567891',
  })

    currentUser = this.loggedIn.asObservable();

    changeUser(user:IUser){
      this.loggedIn.next(user)
    }
    




  constructor() { }
}
