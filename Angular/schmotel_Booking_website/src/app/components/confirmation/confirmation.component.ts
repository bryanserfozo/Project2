import { Component, OnInit } from '@angular/core';
import { IBooking } from 'src/app/Interfaces/IBooking';
import { IHotel } from 'src/app/Interfaces/IHotel';
import { IPayInfo } from 'src/app/Interfaces/IPayInfo';
import { ISearch } from 'src/app/Interfaces/ISearch';
import { IUser } from 'src/app/Interfaces/IUser';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  hotel:IHotel = {
    id: 0,
    hotelName: '',
    rating: '',
    price: '',
    thumbnailUrl: '',
    address: '',
    description: ' '
  };

  search:ISearch = {
    checkIn: '',
    checkOut: '',
    numAdults: 0,
  }

  user: IUser = {
    id: 0,
    firstName : "",
    lastName : "",
    username : "",
    email : "",
    password : "",
    phoneNumber : ""
  }

  payInfo: IPayInfo = {
    paymentId : 0,
    userId : 0,
    firstName : "",
    lastName: "",
    cardNumber: 0
  }

  booking: IBooking = {
    bookingId : 0,
    user : this.user,
    hotel : 0,
    checkIn : "",
    checkOut :"",
    numNights : 0
  }

  totalCost:string = "0"

  calcNumNights(first:string, second: string): number{
      var eventStartTime = new Date(first);
      var eventEndTime = new Date(second);
      var duration = eventEndTime.valueOf() - eventStartTime.valueOf()
    return duration/(24*60*60*1000)
  }


  constructor(private dataService:DataService) { }

  async ngOnInit(){
    await this.dataService.currentHotel.subscribe(hotel => this.hotel = hotel)
    await this.dataService.currentSearch.subscribe(search => this.search = search)
    await this.dataService.currentUser.subscribe(user => this.user = user)
    await this.dataService.currentPayInfo.subscribe(payInfo => this.payInfo = payInfo)
    this.booking.hotel = this.hotel.id;
    this.booking.user = this.user;
    this.booking.checkIn = this.search.checkIn;
    this.booking.checkOut = this.search.checkOut;
    this.booking.numNights = this.calcNumNights(this.search.checkIn, this.search.checkOut)
    var price = Number(this.hotel.price.replace(/[^0-9.-]+/g,""));
    this.totalCost = "$" + (price * this.booking.numNights);
  }

}
