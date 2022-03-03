import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IBooking } from '../Interfaces/IBooking';
import { IHotel } from '../Interfaces/IHotel';
import { IPayInfo } from '../Interfaces/IPayInfo';
import { ISearch } from '../Interfaces/ISearch';
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

  private searchInfo = new BehaviorSubject<ISearch>({
      checkIn: '',
      checkOut: '',
      numAdults: 0,
    }
  )

  currentSearch = this.searchInfo.asObservable();

  changeSearch(newSearch:ISearch){
    this.searchInfo.next(newSearch)
  }

  private loggedIn =new BehaviorSubject<IUser>({
    id: 0,
    email: '',
    username: '',
    firstName: '',
    lastName: '',
    password: '',
    phoneNumber: '',
  })

    currentUser = this.loggedIn.asObservable();

    changeUser(user:IUser){
      this.loggedIn.next(user)
    }
    
    private signedIn = new BehaviorSubject<boolean>(false)
    currentSignedIn = this.signedIn.asObservable();
    changeSignedIn(value:boolean){
      this.signedIn.next(value)
    }

    private payInfo = new BehaviorSubject<IPayInfo>({
      paymentId : 0,
      userId : 0,
      firstName : "",
      lastName: "",
      cardNumber: 0
    })

    currentPayInfo = this.payInfo.asObservable();

    changePayInfo(pi:IPayInfo){
      this.payInfo.next(pi)
    }




  constructor() { }
}
