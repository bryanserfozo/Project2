import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IBooking } from 'src/app/Interfaces/IBooking';
import { IHotel } from 'src/app/Interfaces/IHotel';
import { ISearch } from 'src/app/Interfaces/ISearch';
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
    checkIn: '',
    checkOut: '',
    numAdults: 0,
  }

  navigateConfirm(){
    this.router.navigate(['confirm'])
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
