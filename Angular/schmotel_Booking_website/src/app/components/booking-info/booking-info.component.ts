import { Component, OnInit } from '@angular/core';
import { IBooking } from 'src/app/Interfaces/IBooking';
import { IHotel } from 'src/app/Interfaces/IHotel';
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

  bookingInfo:IBooking = {
    hotel: this.hotel,
    checkIn: '',
    checkOut: '',
    numAdults: 0,
  }

  constructor(private data:DataService, private searchService:SearchServiceService) { }

  async ngOnInit(): Promise<void> {
    await this.data.currentHotel.subscribe(hotel => this.hotel = hotel)
    console.log(this.data.currentBooking)
    await this.data.currentBooking.subscribe(booking => this.bookingInfo = booking)
    await this.searchService.getHotelInfo(this.hotel.id, this.bookingInfo.checkIn , this.bookingInfo.checkOut, this.bookingInfo.numAdults)
    this.hotel.description = "Not Undefined"
    this.hotel.address = this.searchService.entry.address
    this.hotel.description = this.searchService.entry.description
  }

}
