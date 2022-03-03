import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Search } from 'src/app/Interfaces/search';
// import { SearchresultService } from 'src/app/services/searchresult.service';
import { Destination } from 'src/app/Interfaces/destination';
import { SearchServiceService } from 'src/app/services/search-service.service';
import { IHotel } from 'src/app/Interfaces/IHotel';
import { MainComponent } from 'src/app/main-page/main/main.component';
import { IBooking } from 'src/app/Interfaces/IBooking';
import { DataService } from 'src/app/services/data.service';
import { ISearch } from 'src/app/Interfaces/ISearch';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  @Output() notify = new EventEmitter<IHotel[]>();

  hotels: IHotel[] = [];

  hotel: IHotel = {
    id: 0,
    address: '',
    hotelName: '',
    rating: '',
    price: '',
    thumbnailUrl: '',
  };

  search: ISearch = {
    location: '',
    checkIn: '',
    checkOut: '',
    numAdults: 1,
    pageNumber: 1,
    searchOrder: 0,
  };

  location: string = '';
  checkInDate: string = '';
  checkOutDate: string = '';
  numAdults: number = 1;

  error: boolean = false;

  //submit the form and get values
  async onSubmit(): Promise<void> {
    this.hotels = [];
    console.log(
      this.location,
      this.checkInDate,
      this.checkOutDate,
      this.numAdults
    );

    this.search.location = this.location;
    this.search.checkIn = this.checkInDate;
    this.search.checkOut = this.checkOutDate;
    this.search.numAdults = this.numAdults;
    this.search.pageNumber = 1;
    this.search.searchOrder = 0;

    this.dataService.changeSearch(this.search);
    console.log(this.dataService.currentSearch);

    await this.searchService.getHotels(
      this.location,
      this.checkInDate,
      this.checkOutDate,
      this.numAdults,
      this.search.pageNumber,
      this.search.searchOrder
    );
    this.hotels = this.searchService.hotels;
    console.log(this.searchService.hotels);
    this.notify.emit(this.hotels);
  }

  async ngOnInit() {
    console.log('home initialized');
    this.dataService.currentSearch.subscribe(
      (search) => (this.search = search)
    );
    await this.searchService.getHotels(
      this.search.location,
      this.search.checkIn,
      this.search.checkOut,
      this.search.numAdults,
      this.search.pageNumber,
      this.search.searchOrder
    );
    // console.log(this.search)
    console.log(this.searchService.hotels);
    this.hotels = this.searchService.hotels;
    this.notify.emit(this.hotels);
  }

  //celiacodetestapicall

  //   public callApi() {
  //       console.log("the api has been called");
  //       this.searchresultService.callApi().subscribe((data)=>{
  //        console.log(data);
  //        if (data.suggestions){

  //        }
  //         });
  //   }

  // searchFilter = false;

  // plus/minus number of guests
  public setNumGuest(type: string): void {
    console.log('clicked ');
    if (this.numAdults > 1) {
      type === 'plus' ? this.numAdults++ : this.numAdults--;
    } else {
      type === 'plus' ? this.numAdults++ : console.log('no negatives');
    }
  }

  // lstdestinations: Destination[] = [];

  constructor(
    private searchService: SearchServiceService,
    private router: Router,
    private dataService: DataService
  ) {}
  // searchreaultData = null;
}
