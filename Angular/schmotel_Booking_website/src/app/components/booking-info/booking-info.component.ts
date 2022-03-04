import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IBooking } from 'src/app/Interfaces/IBooking';
import { IHotel } from 'src/app/Interfaces/IHotel';
import { ISearch } from 'src/app/Interfaces/ISearch';
import { IUser } from 'src/app/Interfaces/IUser';
import { DataService } from 'src/app/services/data.service';
import { SearchServiceService } from 'src/app/services/search-service.service';

@Component({
  selector: 'app-booking-info',
  templateUrl: './booking-info.component.html',
  styleUrls: ['./booking-info.component.css']
})
export class BookingInfoComponent implements OnInit {

  hotel:IHotel = {
    id: 0,
    hotelName: '',
    rating: '',
    price: '',
    thumbnailUrl: '',
    address: '',
    description: ' '
  };

  searchInfo:ISearch = {
    location: '',
    checkIn: '',
    checkOut: '',
    numAdults: 0,
    pageNumber: 1,
    searchOrder: 0
  }

  user:IUser = {
    id : 0,
    firstName : '',
    lastName : '',
    username : '',
    email : '',
    password : '',
    phoneNumber : ''
  }

  async navigateConfirm(){
    await this.data.currentUser.subscribe(user => this.user = user)
    if (this.user.firstName == ''){
      this.router.navigate(['login'])
    } else {
      this.router.navigate(['confirm'])
    }
    
  }

  constructor(private data:DataService, private searchService:SearchServiceService, private router:Router) { }


  async ngOnInit(): Promise<void> {
    await this.data.currentHotel.subscribe(hotel => this.hotel = hotel)
    console.log(this.data.currentSearch)
    await this.data.currentSearch.subscribe(search => this.searchInfo = search)
    await this.searchService.getHotelInfo(this.hotel.id, this.searchInfo.checkIn , this.searchInfo.checkOut, this.searchInfo.numAdults)
    this.hotel.description = "Not Undefined"
    this.hotel.address = this.searchService.entry.address
    this.hotel.description = this.searchService.entry.description
  }

}
